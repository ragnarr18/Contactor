import React from 'react';
import { PropTypes } from 'prop-types';
import {
  View, TextInput, Text, Button, TouchableOpacity, Image,
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

  async selectFromCameraRoll() {
    const photo = await imageServices.selectFromCameraRoll();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }

  createContact() {
    // fileServices.createContact()
    const { createContact } = this.props;
    createContact();
  }

  saveChanges() {
    // fileServices.saveChanges()
    const { saveChanges } = this.props;
    saveChanges();
  }

  cancelCreate() {
    // reset values to ''
    const { cancelCreate } = this.props;
    cancelCreate();
  }

  cancelChanges() {
    // reset values to the original
    const { cancelChanges } = this.props;
    cancelChanges();
  }

  deleteContact() {
    // some identifier
    // probably the fileName of the contact
    // fileServices.deleteContact(identifier);
    const { deleteContact } = this.props;
    deleteContact();
  }

  async takePhoto() {
    const photo = await imageServices.takePhoto();
    console.log('takePhoto', photo.length);
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }

  async addImage(imageLocation) {
    this.setState({ loadingImage: true }); // spinning wheel mechanic
    const newImage = await fileServices.addImage(imageLocation);
    // console.log('newImage', newImage);

    // const createdImage = await fileServices.getImage(imageLocation);
    // console.log(createdImage);
    this.setState({ image: newImage, loadImage: false, photoSet: true });
    // isModalOpen : false
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updatePhone(text) {
    this.setState({ phoneNumber: text });
  }

  render() {
    const {
      image, isCreate, isOpen, closeModal, setImage,
    } = this.props;
    const { name, phoneNumber } = this.state;
    return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Text style={Styles.title}>Edit Contact</Text>
        {this.state.photoSet // or display default image
          && (
          <Image
            style={Styles.image}
            source={{ uri: `data:image/jpeg;base64,${this.state.image.file}` }}
          />
          )}
        <View style={Styles.iconBox}>
          <TouchableOpacity onPress={() => this.takePhoto()}>
            <Entypo name="camera" style={Styles.icons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectFromCameraRoll()}>
            <Entypo name="image" style={Styles.icons} />
          </TouchableOpacity>
        </View>
        <View style={Styles.textWrap}>
          <Text>Name: </Text>
          <TextInput
            defaultValue={name}
            onChangeText={(text) => this.updateName(text)}
            style={Styles.textBox}
          />
        </View>
        <View style={Styles.textWrap}>
          <Text>Phone: </Text>
          <TextInput
            defaultValue={phoneNumber}
            onChangeText={(text) => this.updatePhone(text)}
            style={Styles.textBox}
          />
        </View>
        <View style={Styles.textWrap}>
          {!isCreate
          && (
            <Button title="DELETE" onPress={() => this.deleteContact()} />
          )}
          <Button title="SAVE" onPress={closeModal} />
          <Button title="CANCEL" onPress={closeModal} />
        </View>
      </Modal>
    );
  }
}

export default EditUser;
