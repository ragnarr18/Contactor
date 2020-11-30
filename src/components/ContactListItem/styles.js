import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  contactContainer: {
    borderBottomWidth: 1,
    padding: 5,
  },
  name: {
    fontSize: 25,
    alignSelf: 'center',
  },
  phoneNumber: {
    fontSize: 15,
    opacity: 0.5,
    alignSelf: 'center',
  },
  icon: {
    height: 70,
    width: 70,
  },
  iconRow: {
    backgroundColor: "#aaaaaa",
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
  },
});
