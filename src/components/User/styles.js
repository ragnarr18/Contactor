import { StyleSheet } from 'react-native';
const photosize = 150;

export default StyleSheet.create({
  name: {
    paddingTop: 10,
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  phone: {
    paddingTop: 10,
    fontSize: 25,
    alignSelf: 'center',
  },
  photo: {
    height: photosize,
    width: photosize,
    borderRadius: photosize / 2,
    alignSelf: 'center',
  },
});
