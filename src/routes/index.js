import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ContactList from '../views/Main/index';

const StackNavigator = createStackNavigator({
  ContactList,
});

export default createAppContainer(StackNavigator);
