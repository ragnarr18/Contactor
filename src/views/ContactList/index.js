import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import ContactListContainer from '../../components/ContactListContainer';
import ContactServices from '../../services/ContactServices';
import styles from './styles';
import ContactImport from '../../components/ContactImport';
import ContactModal from '../../components/UserModal';

class ContactList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      names: ContactServices.getAllNames(''),
      searchTerm: '',
      isImportModalOpen: false,
      fetchContacts: true,
      isContactModalOpen: false,
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
  }

  editSearchTerm(text) {
    // this.fetchContactsByName(text);
    this.setState({ searchTerm: text });
  }

  dynamicSearch() {
    return ContactServices.getAllNames(this.state.searchTerm.replace(/\s+/g, ''));
    // return this.state.names.filter(
    //   (name) => name.toLowerCase()
    //     .includes(this.state.searchTerm.toString().toLowerCase()),
    // );
  }
  //
  // async fetchContactsByName(fileNames) {
  //   console.log('fetch');
  //   const contactsArray = await ContactServices.getContactsByName(fileNames);
  //   console.log('this is the contactsArray : ', contactsArray.length);
  //   return contactsArray;
  //   // this.setState({ contacts: contactsArray, fetched: true });
  // }

  render() {
    const { navigation } = this.props;
    const { fetchContacts } = this.state;
    const { image } = 'https://i.redd.it/yvq5a4xboh931.png';
    const { isImportModalOpen, isContactModalOpen } = this.state;

    return (
      <View>
        <View styles={styles.bottomBorder}>
          <SearchBar
            round
            value={this.state.searchTerm}
            onChangeText={(text) => this.editSearchTerm(text)}
            onClear={() => this.setState({ searchTerm: '' })}
            placeholder="Search for a contact!"
          />
        </View>
        <View style={styles.bottomBorder}>
          <View style={styles.textWrap}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ isImportModalOpen: true })}
            >
              <Icon name="contacts" size={30} />
              <Text>Import contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ isContactModalOpen: true })}
            >
              <Icon name="add" type="material" size={30} />
              <Text>Create new contact</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ContactModal
          isOpen={isContactModalOpen}
          isCreate // change to false when done
          closeModal={() => this.setState({ isContactModalOpen: false })}
          setImage={(currentImage) => this.setState({ image: currentImage, photoReady: true })}
          closeAndFetch={
            () => this.setState({
              isContactModalOpen: false,
              names: ContactServices.getAllNames(''),
            })
          }
          // _cancelCreate={
          //   () => this.setState({
          //     isContactModalOpen: false,
          //   })
          // }
        />
        <ContactImport
          isOpen={isImportModalOpen}
          closeModel={() => this.setState({ isImportModalOpen: false, names: ContactServices.getAllNames('') })}
        />
        <ScrollView
          style={styles.ScrollView}
        >
          <ContactListContainer
            navigation={navigation}
            names={this.dynamicSearch()}
            fetchContacts={() => this.setState({ isImportModalOpen: false, names: ContactServices.getAllNames('') })}
            // contacts={this.fetchContactsByName(this.state.names)}
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
