import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 30,
    alignSelf: 'center',
    margin: 10,
  },
  bottomBorder: {
    height: 60,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  textWrap: {
    flex: 0.1,
    flexWrap: 'wrap',
    margin: 5,
    alignItems: 'center',
  },
  textWrapLeft: {
    alignItems: 'flex-start',
  },
  textWrapRight: {
    alignItems: 'flex-end',
  },
  scrollView: {
    flex: 1,
    height: 190,
  },
  importContact: {
    flexDirection: 'row',
  },
  leftIcon: {
    borderWidth: 5,
  },
  rightIcon: {
    borderWidth: 5,
  },
});
