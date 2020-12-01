import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TextInput, Text, Button, TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Modal from '../../modals/UserModal';
import Styles from './styles';
import * as imageServices from '../../services/imageServices';
import * as fileServices from '../../services/FileServices';
// isCreate => then dont fill in the TextInput and use different services (create user)
// not isCreate => fill in the TextInput and use yet another service (edit user)
class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // selectFromCameraRoll(){
  //
  // }

  async takePhoto() {
    const photo = await imageServices.takePhoto();
    console.log("takePhoto", photo.length);
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }

  async addImage(imageLocation) {
    this.setState({loadingImage: true}) //spinning wheel mechanic
    console.log("addimg")
    const newImage = await fileServices.addImage(imageLocation);
    console.log("after addimg")

    // const createdImage = await fileServices.getImage(imageLocation);
    // console.log(createdImage);
    this.setState({ image: newImage, loadImage: false });
    // isModalOpen : false
  }

  render() {
    const {
      image, name, phoneNumber, isCreate, isOpen, closeModal,
    } = this.props;
    return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Text>show image here</Text>
        <TouchableOpacity onPress={() => this.takePhoto()}>
          <Entypo name="camera" style={Styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
          <Entypo name="image" style={Styles.icons} />
        </TouchableOpacity>

        <Text>upload button here</Text>
        <Text>Name: </Text>
        <TextInput />
        <Text>Phone: </Text>
        <TextInput />
        <Button title="SAVE" onPress={closeModal} />
        <Button title="CANCEL" onPress={closeModal} />

      </Modal>
    );
  }
}

export default EditUser;
