import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';
import callServices from '../../services/callServices';

const callIcon = require('../../images/call.png');
const infoIcon = require('../../images/information.png');

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
      fileName,
      navigation,
      fetchContacts,
    } = this.props;
    // {console.log("this is the image", image)};
    const { navigate } = navigation;
    const ready = true;

    return (
      <Collapse style={styles.contactContainer}>
        <CollapseHeader>
          <View style={styles.headerView}>
            <Image
              style={[styles.icon, styles.verticalAlign, { borderRadius: 75 / 2 }]}
              resizeMode="cover"
              // source={{uri: image}}
              source={{ uri: `${image}` }}
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
              onPress={() => callServices.makeCall(phone)}
            >
              <Image
                style={[styles.icon, { margin: 10 }]}
                source={callIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('ContactInfo', {
                name, phone, image, ready, fileName, fetchContacts,
              })}
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
};

ContactListItem.propTypes = {
  image: PropTypes.string.isRequired,
  phone: PropTypes.string,
  name: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactListItem;
