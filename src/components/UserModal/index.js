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

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valuesSet: false };
  }

  setValues() {
    const { name, phone } = this.props;
    this.setState({
      name, phone, valuesSet: true,
    });
  }

  async createContact() {
    const { name, phone } = this.state;
    let { imageObject } = this.state;
    let image = '';
    if (imageObject === undefined) {
      imageObject = '';
    }
    if (imageObject === '') {
      image = '';
    } else {
      image = `data:image/jpeg;base64,${imageObject.file}`;
    }
    const newContact = { name, phone, image };
    await fileServices.createContact(newContact);
    const { closeAndFetch } = this.props;
    this.setState({ name: '', phone: '', imageObject: '' });
    closeAndFetch();
  }

  async saveChanges() {
    const {
      name, phone,
    } = this.state;
    let { imageObject } = this.state;
    let image = '';
    if (imageObject === undefined) {
      imageObject = '';
    }
    if (imageObject === '') {
      image = '';
    } else {
      image = `data:image/jpeg;base64,${imageObject.file}`;
    }
    const { fileName } = this.props;
    const editedContact = {
      name, phone, image, fileName,
    };
    await fileServices.editContact(editedContact);
    const { closeAndFetch } = this.props;
    this.setState({
      name: '',
      phone: '',
      imageObject: '',
      valuesSet: false,
    });
    closeAndFetch();
  }

  cancelCreate() {
    const { closeModal } = this.props;
    this.setState({ name: '', phone: '', imageObject: '' });
    closeModal();
  }

  cancelChanges() {
    const { closeModal } = this.props;
    this.setState({
      name: '', phone: '', imageObject: '', valuesSet: false,
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
    this.setState({ imageObject: newImage, loadImage: false, photoSet: true });
  }

  updateName(text) {
    this.setState({ name: text });
  }

  updatePhone(text) {
    this.setState({ phone: text });
  }

  render() {
    const {
      isCreate, isOpen, closeModal, setImage, defaultValuesSet,
    } = this.props;
    const { name, phone, valuesSet } = this.state;
    if (!defaultValuesSet && !valuesSet) {
      this.setValues();
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
          {/* {!isCreate
          && (
            <Button
              title="DELETE"
              onPress={() => this.cancelCreate()}
              style={Styles.button}
            />
          )} */}
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
