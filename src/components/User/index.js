import React from 'react';
import { View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';

const profileIcon = require('../../images/icon.png');

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.profileIcon = profileIcon;
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

User.defaultProps = {
  name: PropTypes.string = 'Missing',
  phone: PropTypes.string = 'Missing',
  image: PropTypes.string = 'Missing',
};

User.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  image: PropTypes.string,
};

export default User;
