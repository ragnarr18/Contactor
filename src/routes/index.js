import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UserInfo from '../views/UserInfo';

const StackNavigator = createStackNavigator({
  UserInfo
});

export default createAppContainer(StackNavigator);
