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
    this.state = { contacts: [] };
  }

  async fetchContactsByName(fileNames) {
    // console.log('fetch');
    const contactsArray = await ContactServices.getContactsByName(fileNames);
    console.log("this is the contactsArray: ", contactsArray[5].phone);
    this.setState({ contacts: contactsArray, fetched: true });
  }

  // compnentDidMount() {
  //   const { names } = this.props;
  //   this.fetchUsersByName(names);
  // }

  render() {
    const {
      names, image, photo, navigation, fetchContacts,
    } = this.props;
    const { contacts, fetched } = this.state;
    // const contacts = names;
    // console.log(fetchContacts);
    if (fetchContacts && !fetched ) {
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
        <View>
          {this.props.names.map((name) => (
            <ContactListItem
              key={name}
              name={name}
              image={image}
              navigation={navigation}
            />
          ))}
        </View>

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
