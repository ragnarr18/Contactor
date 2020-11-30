import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ContactListContainer from '../../components/ContactListContainer';
import styles from './styles';

class ContactList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      names: [
        'John',
        'Abigail',
        'X Æ A-Xii',
        'Beyonce',
        'Khloe Kardashian',
        'George Bush',
        'Queen Elizabeth',
        'Yeezy',
        'Ivanka Trump',
        'Leonardo DiCaprio',
      ],
      searchTerm: '',
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
  }

  editSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  dynamicSearch() {
    return this.state.names.filter(
      (name) => name.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()),
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View styles={styles.bottomBorder}>
          <Text style={styles.header}>HEADER</Text>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            placeholder="Search for a contact!"
          />
        </View>
        <ContactListContainer
          navigation={navigation}
          names={this.dynamicSearch()}
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
