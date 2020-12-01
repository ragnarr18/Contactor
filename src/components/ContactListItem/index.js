import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
    const icon = require('../../images/icon.png');
    const {
      name, image, phone, navigation,
    } = this.props;
    const { navigate } = navigation;

    console.log(image);
    return (
      <Collapse style={styles.contactContainer}>
        <CollapseHeader>
          <View>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={icon}
              alt={icon}
            />
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View>
            <Text style={styles.phoneNumber}>
              {phone}
            </Text>
          </View>
          <View styles={styles.iconRow}>
            <View style={styles.iconRowItem}>
              <TouchableHighlight>
                <Image style={styles.icon} source={call} />
              </TouchableHighlight>
            </View>
            <View style={styles.iconRowItem}>
              <TouchableHighlight onPress={() => navigate('ContactInfo', { name: 'name', phoneNumber: 'phoneNumber', image: 'image' })}>
                <Image style={styles.icon} source={info} />
              </TouchableHighlight>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    );
  }
}

ContactListItem.defaultProps = {
  phone: PropTypes.string = 'missing phone number',
  image: PropTypes.string = 'https://i.redd.it/yvq5a4xboh931.png',
};

ContactListItem.propTypes = {
  image: PropTypes.string,
  phone: PropTypes.string,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactListItem;
