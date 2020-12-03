import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  model: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.85,
    borderRadius: 10,
    width: winWidth - 75,
    backgroundColor: 'white',
    padding: 40,
  },
});
