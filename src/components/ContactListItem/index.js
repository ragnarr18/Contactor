import React from 'react';
import { View, Text } from 'react-native';

class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        {this.props.name}
      </View>
    );
  }
}

export default ContactListItem;
