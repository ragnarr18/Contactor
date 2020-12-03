import React from 'react';
import { View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.profileIcon = require('../../images/icon.png');
  }

  render() {
    const {
      name,
      phone,
      image,
    } = this.props;
    return (
      <View>
        <Image
          style={styles.photo}
          source={{ uri: `${image}` }}
        />
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.phone}>
          {phone}
        </Text>
      </View>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default User;
