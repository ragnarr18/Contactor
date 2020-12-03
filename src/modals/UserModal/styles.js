import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  model: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.7,
    borderRadius: 10,
    width: winWidth - 100,
    height: winHeight - 100,
    backgroundColor: 'white',
    padding: 30,
  },
});
