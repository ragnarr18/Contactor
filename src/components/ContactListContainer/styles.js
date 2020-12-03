import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: height * 4.8,
  },
});
