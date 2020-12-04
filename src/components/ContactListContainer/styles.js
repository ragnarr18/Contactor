import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 2,
    flexDirection: 'column',
    height: height * 2.5,
    backgroundColor: '#AAAAAA'
  },
});
