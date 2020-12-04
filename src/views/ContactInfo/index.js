import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import User from '../../components/User';
import UserModal from '../../components/UserModal';
import callServices from '../../services/callServices';
import styles from './styles';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditModalOpen: false,
    };
  }

  openEditModal() {
    this.setState({ isEditModalOpen: true });
  }

  saveChanges(fetchContacts) {
    const { navigation } = this.props;
    this.setState({ isEditModalOpen: false });
    fetchContacts();
    navigation.popToTop();
  }

  render() {
    const { navigation } = this.props;
    const {
      name, phone, image, fileName, fetchContacts,
    } = navigation.state.params;
    const { photoReady, isEditModalOpen } = this.state;

    return (
      <View>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => this.openEditModal()}
        >
          <Text style={styles.editText}>
            Edit Contact
          </Text>
          <View />
          <Icon
            name="create"
            size={30}
          />
        </TouchableOpacity>
        <User
          name={name}
          phone={phone}
          image={image}
          photoReady={photoReady}
          fileName={fileName}
        />
        <View style={styles.dial}>
          <Icon
            reverse
            raised
            color="#33cc33"
            name="call"
            size={50}
            onPress={() => callServices.makeCall(phone)}
          />
        </View>
        <UserModal
          isOpen={isEditModalOpen}
          name={name}
          phone={phone}
          image={image}
          fileName={fileName}
          isCreate={false}
          closeModal={() => this.setState({ isEditModalOpen: false })}
          setImage={(currentImage) => this.setState({ image: currentImage })}
          deleteContact={() => this.deleteContact()}
          closeAndFetch={() => this.saveChanges(fetchContacts)}
        />
      </View>
    );
  }
}

ContactInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        fileName: PropTypes.string.isRequired,
        fetchContacts: PropTypes.func.isRequired,
      }),
    }),
  }).isRequired,
};
export default ContactInfo;
