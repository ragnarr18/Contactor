import React from 'react';
import { View } from 'react-native';
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
        {name}
        {phoneNumber}
      </View>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
};

export default User;
