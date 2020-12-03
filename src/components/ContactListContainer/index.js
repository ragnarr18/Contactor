import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
// import ContactServices from '../../services/ContactServices';
import ContactServices from '../../services/ContactServices';
import styles from './styles';

class ContactListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], fetched: false };
  }

  componentDidUpdate(prevProps) {
    const { names } = this.props;
    // const { names } = prevProps;
    if (names !== prevProps.names) {
      this.setState({ fetched: false });
    }
  }

  async fetchContactsByName(fileNames) {
    console.log('fetch');
    const contactsArray = await ContactServices.getContactsByName(fileNames);
    console.log('this is the contactsArray : ', contactsArray.length);
    contactsArray.sort((a, b) => (a.name > b.name)? 1: -1);
    this.setState({ contacts: contactsArray, fetched: true });
  }

  render() {
    const {
      names, image, photo, navigation, fetchContacts,
    } = this.props;
    const { fetched } = this.state;
    // const contacts = names;
    // console.log(fetchContacts);
    if (fetchContacts && !fetched) {
      this.fetchContactsByName(names);
      // console.log('contacts', contacts);
      // fetched = true;
    }

    // const contacts = [
    //   { name: 'John', phone: '581-2345', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png' },
    //   { name: 'Sally', phone: '500-8000', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png' },
    // ];
    // console.log(contacts);
    // console.log('running function...');
    // ContactServices.getContactsByName('John Doe').then((res) => console.log('res', res));
    // const contactArray = [];

    // contacts.forEach((item) => (
    //   contactArray.push(
    //     <View>
    //       {this.props.names.map((name) => <ContactListItem item={item} />)}
    //     </View>,
    // )));

    return (
      <View>
        {this.state.contacts.length > 0
          && (
          <View>
            {this.state.contacts.map((contact) => (
              <ContactListItem
                key={contact.name}
                name={contact.name}
                image={contact.image}
                phone={contact.phone}
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
  name: '',
  image: '',
  photo: '',
};

ContactListContainer.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  photo: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactListContainer;
