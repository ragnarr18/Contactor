import * as FileSystem from 'expo-file-system';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import data from '../../resources/USERS.json';
import defaultProfilePicture from '../../resources/PROFILE_PIC.json';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

async function createContact(contact) {
  await setupDirectory();
  const newContact = { name: contact.name, phone: contact.phone, image: contact.image };
  const id = uuidv4();
  const fileName = `${contactsDirectory}/${id}.json`;
  if (contact.image === '') {
    newContact.image = defaultProfilePicture.image;
  }
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(newContact));
  const fileInfo = await FileSystem.getInfoAsync(`file://${fileName}`);
  data.users.push({ name: contact.name, fileName: `${id}.json` });
  return fileInfo.exists;
}

export default createContact;
