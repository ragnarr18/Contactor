import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
// import userService from '../../services/userService'; (this is the image that we Need)
import User from '../../components/User';
import UserModal from '../../components/UserModal';
import styles from './styles';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      name: '',
      phoneNumber: '',
      isEditModalOpen: false,
      photoReady: false,
    };
    const { image, name, phone } = this.props;
    this.setNewInfo(image, name, phone);
  }

  setNewInfo(image, name, phoneNumber) {
    this.setState({ image, name, phoneNumber });
  }

  deleteContact() {
    const { navigation } = this.props;
    this.setState({ closeModal: true });
    navigation.popToTop();
  }

  openEditModal() {
    this.setState({ isEditModalOpen: true });
  }

  render() {
    // console.log("made it")
    const { navigation } = this.props;
    const { name, phone, image } = navigation.state.params;
    const {
      isEditModalOpen,
    } = this.props;
    const { photoReady } = this.state;

    return (
      <View>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => this.openEditModal()}
        >
          <Text style={styles.editText}>
            Edit Contact
          </Text>
          <View />
          <Icon
            name="create"
            size={30}
          />
        </TouchableOpacity>
        <User
          name={name}
          phone={phone}
          image={image}
          photoReady={photoReady}
        />
        <View style={styles.dial}>
          <Icon
            reverse
            raised
            color="#33cc33"
            name="call"
            size={50}
          />
        </View>
        <UserModal
          isOpen={isEditModalOpen}
          name={name}
          phoneNumber={phone}
          image={image}
          photoReady
          isCreate={false}
          closeModal={() => this.setState({ isEditModalOpen: false })}
          setImage={(currentImage) => this.setState({ image: currentImage, photoReady: true })}
          deleteContact={() => this.deleteContact()}
        />
      </View>
    );
  }
}

export default ContactInfo;
