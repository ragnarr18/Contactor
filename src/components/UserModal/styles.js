import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  icons: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
  iconBox: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrap: {
    flex: 0.1,
    flexWrap: 'wrap',
    margin: 5,
    justifyContent: 'space-between',
  },
  textBox: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    width: winWidth - 180,
    height: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 15,
    marginRight: 20,
  },
});
