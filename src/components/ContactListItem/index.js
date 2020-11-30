import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';

class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // sendir áfram object með öllum upplýsingum um einn contact...

    // const { item } = this.props;
    const call = require('../../images/call.png');
    const info = require('../../images/information.png');
    const { name, phone, navigation } = this.props;
    const { navigate } = navigation;
    return (
      <Collapse style={styles.contactContainer}>
        <CollapseHeader>
          <Text style={styles.name}>
            {name}
          </Text>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.phoneNumber}>
            {phone}
          </Text>
          <View styles={styles.iconRow}>
            <TouchableHighlight>
              <Image style={styles.icon} source={call} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('ContactInfo', { name, phone, image: 'image' })}>
              <Image style={styles.icon} source={info} />
            </TouchableHighlight>
          </View>
        </CollapseBody>
      </Collapse>
    );
  }
}

/*
ContactListItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  contact: PropTypes.objectOf(PropTypes.any).shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}
*/
ContactListItem.defaultProps = {
  phone: PropTypes.string = 'missing phone number',
};

export default ContactListItem;
