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
import PROFILE_PIC from '../../resources/PROFILE_PIC.json';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valuesSet: false, imageObject: PROFILE_PIC.image };
  }

  setValues() {
    const { name, phone, image } = this.props;
    this.setState({
      name, phone, valuesSet: true, imageObject: image,
    });
  }

  async createContact() {
    const { name, phone } = this.state;
    const { imageObject } = this.state;
    const newContact = { name, phone, image: imageObject };
    await fileServices.createContact(newContact);
    const { closeAndFetch } = this.props;
    this.setState({ name: '', phone: '', imageObject: PROFILE_PIC.image });
    closeAndFetch();
  }

  async saveChanges() {
    const {
      name, phone,
    } = this.state;
    const { imageObject } = this.state;
    console.log(imageObject);
    const { fileName } = this.props;
    const editedContact = {
      name, phone, image: imageObject, fileName,
    };
    await fileServices.editContact(editedContact);
    const { closeAndFetch } = this.props;
    this.setState({
      name: '', phone: '', imageObject: PROFILE_PIC.image, valuesSet: false,
    });
    closeAndFetch();
  }

  cancelCreate() {
    const { closeModal } = this.props;
    this.setState({
      name: '', phone: '', imageObject: PROFILE_PIC.image,
    });
    closeModal();
  }

  cancelChanges() {
    const { closeModal } = this.props;
    this.setState({
      name: '', phone: '', imageObject: PROFILE_PIC.image, valuesSet: false,
    });
    closeModal();
  }

  async selectFromCameraRoll() {
    const photo = await imageServices.selectFromCameraRoll();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }

  async takePhoto() {
    const photo = await imageServices.takePhoto();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }

  async addImage(imageLocation) {
    this.setState({ loadingImage: true }); // spinning wheel mechanic
    const newImage = await fileServices.addImage(imageLocation);
    const imageObject = `data:image/jpeg;base64,${newImage.file}`;
    this.setState({ imageObject, loadImage: false, photoSet: true });
  }

  changeImageObject() {
    this.setState({ imageObject: PROFILE_PIC.image });
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updatePhone(text) {
    this.setState({ phone: text });
  }

  render() {
    const {
      isCreate, isOpen, closeModal, defaultValuesSet, image,
    } = this.props;
    const { name, phone, valuesSet } = this.state;
    { console.log((!defaultValuesSet && !valuesSet)); }
    if (!defaultValuesSet && !valuesSet) {
      this.setValues();
    }
    return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Text style={Styles.title}>Contact Info</Text>
        <Text>Profile Image:</Text>
        {/* {this.state.photoSet // or display default image
          && ( */}
        {/* {console.log("photo", this.state.imageObject)} */}
        <Image
          style={Styles.image}
          source={{ uri: this.state.imageObject }}
        />
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
            textAlign="center"
            style={Styles.textBox}
          />
        </View>
        <View style={Styles.textWrap}>
          <Text>Phone: </Text>
          <TextInput
            keyboardType="numeric"
            value={phone}
            onChangeText={(text) => this.updatePhone(text)}
            textAlign="center"
            style={Styles.textBox}
          />
        </View>
        <View style={Styles.textWrap}>
          <Button
            title="RM IMAGE"
            onPress={() => this.changeImageObject()}
            style={Styles.button}
          />
          <Button
            title="SAVE"
            onPress={isCreate ? () => this.createContact() : () => this.saveChanges()}
            style={Styles.button}
          />
          <Button
            title="CANCEL"
            onPress={isCreate ? () => this.cancelCreate() : () => this.cancelChanges()}
            style={Styles.button}
          />
        </View>
      </Modal>
    );
  }
}

EditUser.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  isCreate: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  defaultValuesSet: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeAndFetch: PropTypes.func.isRequired,

};

export default EditUser;
