import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  model: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: winWidth - 100,
    backgroundColor: 'white',
    padding: 30,
  },
});
