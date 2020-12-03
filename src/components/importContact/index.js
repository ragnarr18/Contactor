import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import * as Contacts from 'expo-contacts';
import PropTypes from 'prop-types';
import * as Contacts from 'expo-contacts';
import Modal from '../../modals/importContactModal';

function close(closeModel) {
  closeModel();
}

class ImportContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: null,
    };
  }

  async constructContact() {
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
          if (data.length > 0) {
            contact = data[0];
            return data;
          }
        } return {};
      })();
    }, []);
  }

  async componentDidMount() {
    this.setState({ contact: constructContact() });
  }
  render() {
    const { isOpen, closeModel } = this.props;

    return (
      <Modal
        // animationType="slide"
        isOpen={isOpen}
        closeModel={closeModel}
      >
        <View>
          <Text>
            contact info:
            {' ['}
            {this.contact}
            ]
          </Text>
          <TouchableOpacity
            onPress={() => close(closeModel)}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

ImportContact.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModel: PropTypes.func.isRequired,
}

export default ImportContact;
