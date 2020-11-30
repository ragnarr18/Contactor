import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ContactListContainer from '../../components/ContactListContainer';
import styles from './styles';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View styles={styles.bottomBorder}>
          <Text style={styles.header}>HEADER</Text>
        </View>
        <ContactListContainer navigation={navigation} />
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
