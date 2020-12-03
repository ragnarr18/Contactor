import React from 'react';
import {
  View, Text, TouchableOpacity, Button, ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import SelectMultiple from 'react-native-select-multiple';
import * as Contacts from 'expo-contacts';
import Modal from '../../modals/importContactModal';
import styles from './styles';

class ContactImport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModel: this.props.closeModel,
      contacts: [],
      selected: [],
    };
  }

  async componentDidMount() {
    // await importContacts(this.setContact);
    // this.setState({ rerender: 1 });
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          this.setState({ contacts: data });
        }
      }
    })();
  }

  close() {
    this.setState({ selected: []});
    this.state.closeModel();
  }

  addToSelected = (selectedItems) => {
    this.setState({ selected: selectedItems });
  }

  returnSelected() {
    const { selected } = this.state;
    const values = [];

    selected.forEach((item) => {
      values.push(item.value);
    });
    console.log(values);
    this.close()
    // return values;
  }

  render() {
    const { isOpen } = this.props;
    const { contacts, selected } = this.state;

    const contactItems = [];
    const contactNames = [];
    let icon = <Icon name="check-box-outline-blank" size={20} />;

    contacts.forEach((item) => {
      if (selected.includes(item.name)) { icon = <Icon name="check-box" size={20} />; }

      contactNames.push(
        { label: item.name, value: item }
      );

      contactItems.push(
        <TouchableOpacity onPress={() => this.addToSelected(item)}>
          <View style={styles.importContact}>
            {icon}
            <Text>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });


    return (
      <Modal
        // animationType="slide"
        isOpen={isOpen}
        closeModel={this.state.closeModel}
      >
        <View>
          <Text style={styles.header}>Import Contacts</Text>
          <SelectMultiple
            items={contactNames}
            selectedItems={this.state.selected}
            onSelectionsChange={this.addToSelected}
          />
          <Button
            title="Select"
            style={styles.bottomButton}
            onPress={() => this.returnSelected()}
          />
          <Button
            title="Close"
            style={styles.bottomButton}
            onPress={() => this.close()}
          />
        </View>
      </Modal>
    );
  }
}

ContactImport.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModel: PropTypes.func.isRequired,
};

export default ContactImport;
