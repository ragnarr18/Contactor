import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ContactList from '../views/ContactList';
import ContactInfo from '../views/ContactInfo'

const StackNavigator = createStackNavigator({
  ContactList,
  ContactInfo,
});

export default createAppContainer(StackNavigator);
