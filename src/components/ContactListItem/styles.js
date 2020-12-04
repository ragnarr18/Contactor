import { StyleSheet, Dimensions } from 'react-native';

// const screenWidth = Math.round(Dimensions.get('window').width);
const iconWidth = 60;

export default StyleSheet.create({
  contactContainer: {
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    position: 'absolute',
    left: iconWidth + 25,
    fontSize: 20,
  },
  phoneNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    // borderStyle: 'solid',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    // borderColor: '#000000',
    fontSize: 15,
    opacity: 0.5,
  },
  phoneNumberText: {
    fontSize: 15,
    marginTop: 3,
    marginBottom: 3,
  },
  icon: {
    height: iconWidth,
    width: iconWidth,
    margin: 10,
  },
  verticalAlign: {
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    borderWidth: 1,
  },
  iconRowItem: {
    flexDirection: 'row',
  },
});
