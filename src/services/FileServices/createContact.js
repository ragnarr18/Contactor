import * as FileSystem from 'expo-file-system';
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
  const newName = contact.name.replace(/\s/g, '').toLowerCase();
  // const fileName = `${contactsDirectory}/${newName}${contact.phone}.json`;
  const id = uuidv4();
  const fileName = `${contactsDirectory}/{id}.json`;
  // console.log(newStr.toLowerCase());
  // console.log(`${contactsDirectory}/${newName}${populus[i].phone}.json`);
  // console.log(contact.image);
  if (contact.image === '') {
    newContact.image = defaultProfilePicture.image;
  }
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(newContact));
  const fileInfo = await FileSystem.getInfoAsync(`file://${fileName}`);
  console.log('file created: ', fileInfo.exists);

  // data.users.push({ name: contact.name, fileName: `${newName}${contact.phone}.json` });
  data.users.push({ name: contact.name, fileName: `${id}.json` });
  return fileInfo.exists;
}

export default createContact;
