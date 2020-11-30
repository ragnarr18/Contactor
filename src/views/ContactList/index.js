import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';
import ContactListContainer from '../../components/ContactListContainer';
import styles from './styles';

class ContactList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      names: [
        'John',
        'Sally',
      ],
      searchTerm: '',
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
    return (
      <View>
        <View styles={styles.bottomBorder}>
          <Text style={styles.header}>HEADER</Text>
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
        />
      </View>
    );
  }
}

/*
ContactList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
*/
export default ContactList;
