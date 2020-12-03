import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';
import ContactListContainer from '../../components/ContactListContainer';
import ContactServices from '../../services/ContactServices';
import styles from './styles';
import ImportContact from '../../components/importContact';

class ContactList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      names: ContactServices.getAllNames(),
      searchTerm: '',
      isImportModalOpen: false,
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
  }

  editSearchTerm(text) {
    console.log(text);
    this.setState({ searchTerm: text });
  }

  dynamicSearch() {
    return this.state.names.filter(
      (name) => name.toLowerCase()
        .includes(this.state.searchTerm.toString().toLowerCase()),
    );
  }

  render() {
    const { navigation } = this.props;
    const { image } = 'https://i.redd.it/yvq5a4xboh931.png';
    const { isImportModalOpen } = this.state;

    return (
      <View>
        <View styles={styles.bottomBorder}>
          <Text style={styles.header}>ALL CONTACTS</Text>
          <TouchableOpacity onPress={() => this.setState({ isImportModalOpen: true })}>
            <Icon name="add" size={30} />
          </TouchableOpacity>
          <Icon name="contacts" type="material" size={30} />
          <SearchBar
            round
            value={this.state.searchTerm}
            onChangeText={(text) => this.editSearchTerm(text)}
            onClear={() => this.setState({ searchTerm: '' })}
            placeholder="Search for a contact!"
          />
        </View>
        <ContactListContainer
          navigation={navigation}
          names={this.dynamicSearch()}
          image={image}
        />
        <ImportContact
          isOpen={isImportModalOpen}
          closeModel={() => this.setState({ isImportModalOpen: false })}
        />
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
