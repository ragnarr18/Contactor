import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import styles from './styles';

class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { item } = this.props;
    const { name, phone } = this.props;
    return (
      <Collapse style={styles.contactContainer}>
        <CollapseHeader>
          <Text>
            {name}
          </Text>
        </CollapseHeader>
        <CollapseBody>
          <Text>
            {phone}
          </Text>
        </CollapseBody>
      </Collapse>
    )
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
  phone: PropTypes.string = '\t> missing phone number',
}

export default ContactListItem;
