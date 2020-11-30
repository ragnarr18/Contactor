import React from 'react';
import { View, Text } from 'react-native';
// import userService from '../../services/userService'; (this is the image that we Need)
import User from '../../components/User';
import UserTaskBar from '../../components/UserTaskBar';
// import UserModal from '../../modals/UserModal';

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
    const { userId } = this.navigation.state.params;
    const {
      image, name, phoneNumber, isEditModalOpen,
    } = this.state;

    return (
      <View>
        <Text>{userId}</Text>
        <User name={name} phoneNumber={phoneNumber} />
        <UserTaskBar onEdit={this.setState({ isEditModalOpen: true })} />
        call button
        userModal isOpen={isEditModalOpen}
      </View>
    );
  }
}

export default UserInfo;
