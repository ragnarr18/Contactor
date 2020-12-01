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
    const icon = require('../../images/icon.png');
    const {
      name, image, phone, navigation,
    } = this.props;
    const { navigate } = navigation;
    const path = `${image}`;
    return (
      <View>
        <Image
          style={{ height: 100, width: 100 }}
          // source={require(`${image}`)}
          source={icon}
          alt={icon}
        />
        <Collapse style={styles.contactContainer}>
          <CollapseHeader>

            <Text style={styles.name}>
              {name}
            </Text>
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
      </View>
    );
  }
}

ContactListItem.defaultProps = {
  phone: PropTypes.string = 'missing phone number',
  image: PropTypes.string = '../../images/icon.png',
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
