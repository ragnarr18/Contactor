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
    borderColor: '#000000',
    bottom: 20,
  },
  iconBox: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 20,
  },
  textWrap: {
    flex: 0.15,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  textBox: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    width: winWidth - 180,
    height: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 40,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
  },
});
