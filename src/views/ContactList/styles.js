import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomBorder: {
    height: 70,
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: '#bdc7d0',
  },
  textWrap: {
    flex: 0.1,
    flexWrap: 'wrap',
    margin: 10,
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
  button: {
    marginRight: 45,
  },
});
