import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <Collapse>
        <CollapseHeader>
          <Text>
            {item.name}
          </Text>
        </CollapseHeader>
        <CollapseBody>
          <Text>
            {item.phone}
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
export default ContactListItem;
