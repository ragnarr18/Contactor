import React from 'react';
import {
  View, TextInput, Text, ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';
import ContactListContainer from '../../components/ContactListContainer';
import ContactServices from '../../services/ContactServices';
import styles from './styles';

class ContactList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      names: ContactServices.getAllNames(),
      searchTerm: '',
      fetchContacts: true,
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
  }

  editSearchTerm(text) {
    console.log(text);
    // this.fetchContactsByName(text);
    this.setState({ searchTerm: text });
  }

  dynamicSearch() {
    // console.log("dynamic");
    return this.state.names.filter(
      (name) => name.toLowerCase()
        .includes(this.state.searchTerm.toString().toLowerCase()),
    );
  }

  // fetchContactsByName(fileNames) {
  //   console.log('fetch');
  //   const contactsArray = ContactServices.getContactsByName(fileNames);
  //   this.setState({ contacts: contactsArray });
  // }

  render() {
    const { navigation } = this.props;
    const { fetchContacts } = this.state;
    const { image } = 'https://i.redd.it/yvq5a4xboh931.png';
    return (
      <View>
        <View styles={styles.bottomBorder}>
          <Text style={styles.header}>ALL CONTACTS</Text>
          <SearchBar
            round
            value={this.state.searchTerm}
            onChangeText={(text) => this.editSearchTerm(text)}
            onClear={() => this.setState({ searchTerm: '', fetchContacts: true })}
            placeholder="Search for a contact!"
          />
        </View>
        <ScrollView
          style={styles.ScrollView}
        >
          <ContactListContainer
            navigation={navigation}
            names={this.dynamicSearch()}
            fetchContacts={fetchContacts}
            // contacts={this.state.contacts}
            // image={image}
          />
        </ScrollView>
      </View>
    );
  }
}

ContactList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactList;
