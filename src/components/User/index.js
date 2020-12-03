import React from 'react';
import { View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      phoneNumber,
      image,
      photoReady,
    } = this.props;
    return (
      <View>
        {this.props.photoReady
          && (
          <Image
            style={{
              width: 100,
              height: 50,
              borderWidth: 1,
              borderColor: 'red',
            }}
            source={{
              uri: `${this.props.image}`,
            }}
          />
          )}
        <Text>
          Contact Name:
          {' '}
          {name}
        </Text>
        <Text>
          Contact Number:
          {' '}
          {phoneNumber}
        </Text>
      </View>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default User;
