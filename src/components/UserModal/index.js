import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TextInput, Text, Button,
} from 'react-native';
import Modal from '../../modals/UserModal';
// isCreate => then dont fill in the TextInput and use different services (create user)
// not isCreate => fill in the TextInput and use yet another service (edit user)
class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      image, name, phoneNumber, isCreate,
    } = this.props;
    return (
      <Modal>
        show image here
        upload button here
        <Text>Name: </Text>
        <TextInput />
        <Text>Phone: </Text>
        <TextInput />
        Cancel     Save
      </Modal>
    );
  }
}

export default EditUser;
