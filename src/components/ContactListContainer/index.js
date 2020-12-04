import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import ContactServices from '../../services/ContactServices';
import styles from './styles';

class ContactListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], fetched: false };
  }

  componentDidUpdate(prevProps) {
    const { names } = this.props;
    if (names !== prevProps.names) {
      this.setState({ fetched: false });
    }
  }

  async fetchContactsByName(fileNames) {
    const contactsArray = await ContactServices.getContactsByName(fileNames);
    contactsArray.sort((a, b) => ((a.name > b.name) ? 1 : -1));
    this.setState({ contacts: contactsArray, fetched: true });
  }

  render() {
    const {
      names, navigation, fetchContacts,
    } = this.props;
    const { fetched, contacts } = this.state;

    if (fetchContacts && !fetched) {
      this.fetchContactsByName(names);
    }

    return (
      <View style={styles.container}>
        {contacts.length > 0
          && (
          <View>
            {contacts.map((contact) => (
              <ContactListItem
                key={contact.fileName}
                name={contact.name}
                image={contact.image}
                phone={contact.phone}
                fileName={contact.fileName}
                fetchContacts={fetchContacts}
                navigation={navigation}
              />
            ))}
          </View>
          )}
      </View>
    );
  }
}

ContactListContainer.defaultProps = {
  names: '',
};

ContactListContainer.propTypes = {
  names: PropTypes.string,
  fetchContacts: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactListContainer;
