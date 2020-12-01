import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, phoneNumber } = this.props;
    return (
      <View>
        <Text>{name}</Text>
        <Text>{phoneNumber}</Text>
      </View>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default User;
