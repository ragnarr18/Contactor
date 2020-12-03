import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import call from 'react-native-phone-call';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';

const callIcon = require('../../images/call.png');
const infoIcon = require('../../images/information.png');
const profileIcon = require('../../images/icon.png');

function makeCall(phone) {
  if (phone.length !== 7) {
    alert('This contact has an invalid phone number');
    return;
  }
  console.log('length is incorrect:', phone.length);

  const args = {
    number: phone,
    prompt: true,
  };
  console.log('call would be made');
  call(args).catch(console.error);
}

class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      image,
      phone,
      navigation,
    } = this.props;
    const { navigate } = navigation;

    return (
      <Collapse style={styles.contactContainer}>
        <CollapseHeader>
          <View style={styles.headerView}>
            <Image
              style={[styles.icon, styles.verticalAlign]}
              resizeMode="cover"
              source={profileIcon}
            />
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.phoneNumber}>
            <Text style={styles.phoneNumberText}>
              Phone Number:
              {' '}
              {phone}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: '#dddddd',
            }}
          >
            <TouchableOpacity
              onPress={() => makeCall('4833331')}
            >
              <Image
                style={[styles.icon, { margin: 10 }]}
                source={callIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('ContactInfo', { name, phoneNumber: phone, image })}
            >
              <Image
                style={[styles.icon, { margin: 10 }]}
                source={infoIcon}
              />
            </TouchableOpacity>
          </View>
        </CollapseBody>
      </Collapse>
    );
  }
}

ContactListItem.defaultProps = {
  phone: PropTypes.string = 'Missing',
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
