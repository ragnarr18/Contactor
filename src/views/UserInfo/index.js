import React from 'react';
import { View, Text, Button } from 'react-native';
// import userService from '../../services/userService'; (this is the image that we Need)
import User from '../../components/User';
import UserModal from '../../components/UserModal';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '', name: '', phoneNumber: '', isEditModalOpen: false,
    };
  }

  setNewInfo(image, name, phoneNumber) {
    this.setState({ image, name, phoneNumber });
  }

  render() {
    const { navigation } = this.props;
    const { userFileName } = this.navigation.state.params;
    const {
      image, name, phoneNumber, isEditModalOpen,
    } = this.state;

    return (
      <View>
        <User name={name} phoneNumber={phoneNumber} />
        <Button title="Edit" onPress={this.setState({ isEditModalOpen: true })} />
        <Text>dial button</Text>
        <UserModal
          isOpen={isEditModalOpen}
          isCreate={false}
          closeModal={() => this.setState({ isEditModalOpen: false })}
        />
      </View>
    );
  }
}

export default UserInfo;
