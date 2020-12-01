import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import ContactServices from '../../services/ContactServices';

class ContactListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name, image, photo, navigation
    } = this.props;
    // const contacts = [
    //   { name: 'John', phone: '581-2345', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png' },
    //   { name: 'Sally', phone: '500-8000', image: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png' },
    // ];
    // console.log(contacts);
    console.log(ContactServices.getContactsByName('John Doe'));
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
          {this.props.names.map((name) => <ContactListItem name={name} navigation={navigation} />)}
        </View>
      </View>
    );
  }
}

ContactListContainer.defaultProps = {
  name: '',
  image: '',
  photo: ''
}

ContactListContainer.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  photo: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default ContactListContainer;
