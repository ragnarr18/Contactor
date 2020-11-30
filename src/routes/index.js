import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ContactList from '../views/ContactList';
import UserInfo from '../views/UserInfo';

const StackNavigator = createStackNavigator({
  ContactList,
  UserInfo,
});

export default createAppContainer(StackNavigator);
