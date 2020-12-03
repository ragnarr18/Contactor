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

  async createContact() {
    const { name, phone, imageObject } = this.state;
    let image = '';
    console.log("isUndefined: ", (imageObject !== undefined) );
    if (imageObject !== undefined) {
       image = `data:image/jpeg;base64,${imageObject.file}`;
    }
    const newContact = { name, phone, image };
    console.log(imageObject);
    await fileServices.createContact(newContact);
    const { closeAndFetch } = this.props;
    this.setState({ name: '', phone: '', imageObject: '' });
    closeAndFetch();
  }

  saveChanges() {
    // fileServices.saveChanges()
    const { fileName ,name, phone } = this.state;

    const { closeAndFetch } = this.props;
    this.setState({ name: '', phone: '', imageObject: '' });
    closeAndFetch();
  }

  cancelCreate() {
    const { closeModal } = this.props;
    this.setState({ name: '', phone: '', imageObject: '' });
    closeModal();
  }

  cancelChanges() {
    // reset values to the original
    const { closeModal } = this.props;
    this.setState({ name: '', phone: '', imageObject: '' });
    closeModal();
  }

  deleteContact() {
    // some identifier
    // probably the fileName of the contact
    // fileServices.deleteContact(identifier);
    const { deleteContact } = this.props;
    // deleteContact();
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
    this.setState({ imageObject: newImage, loadImage: false, photoSet: true });
    // isModalOpen : false
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updatePhone(text) {
    this.setState({ phone: text });
  }

  render() {
    const {
      image, isCreate, isOpen, closeModal, setImage, defaultValuesSet,
    } = this.props;
    const { name, phone } = this.state;
    if(!defaultValuesSet){

    }
    return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Text style={Styles.title}>Contact Info</Text>
        <Text>Profile Image:</Text>
        {this.state.photoSet // or display default image
          && (
          <Image
            style={Styles.image}
            source={{ uri: `data:image/jpeg;base64,${this.state.imageObject.file}` }}
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
            value={name}
            onChangeText={(text) => this.updateName(text)}
            style={Styles.textBox}
          />
        </View>
        <View style={Styles.textWrap}>
          <Text>Phone: </Text>
          <TextInput
            keyboardType="numeric"
            value={phone}
            onChangeText={(text) => this.updatePhone(text)}
            style={Styles.textBox}
          />
        </View>
        <View style={Styles.textWrap}>
          {!isCreate
          && (
            <Button
              title="DELETE"
              onPress={() => this.deleteContact()}
            />
          )}
          <Button
            title="SAVE"
            onPress={isCreate ? () => this.createContact() : () => this.saveChanges()}
          />
          <Button
            title="CANCEL"
            onPress={isCreate ? () => this.cancelCreate() : () => this.cancelChanges()}
          />
          {/* <Button title="SAVE" onPress={() => this.createContact(closeModal)} />
          <Button title="CANCEL" onPress={closeModal} /> */}
        </View>
      </Modal>
    );
  }
}

export default EditUser;
