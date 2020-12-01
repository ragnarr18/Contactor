import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ContactList from '../../views/ContactList';
import ContactInfo from '../../views/UserInfo';

const StackNavigator = createStackNavigator({
  ContactList,
  ContactInfo,
});

export default createAppContainer(StackNavigator);
