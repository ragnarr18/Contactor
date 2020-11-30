import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

class ContactListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        {this.props.names.map((name) => <ContactListItem name={name} />)}
        <ContactListItem navigation={navigation} />
      </View>
    );
  }
}

ContactListContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactListContainer;
