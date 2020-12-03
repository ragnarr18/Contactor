import React from 'react';
import { View, Text, Button } from 'react-native';
// import userService from '../../services/userService'; (this is the image that we Need)
import User from '../../components/User';
import UserModal from '../../components/UserModal';

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
  }

  setNewInfo(image, name, phoneNumber) {
    this.setState({ image, name, phoneNumber });
  }

  deleteContact() {
    const { navigation } = this.props;
    this.setState({ closeModal: true });
    navigation.popToTop();
  }

  render() {
    // console.log("made it")
    const { navigation } = this.props;
    const { name, phone, image } = navigation.state.params;
    const {
      isEditModalOpen,
    } = this.props;

    return (
      <View>
        <User
          name={name}
          phone={phone}
          image={image}
        />
        <Button
          title="Edit"
          onPress={() => this.setState({ isEditModalOpen: true })}
        />
        <Text>dial button</Text>
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
