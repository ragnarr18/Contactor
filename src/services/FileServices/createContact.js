import * as FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

async function createContact(contact) {
  await setupDirectory();
  // const item = { name: contact.name, phone: contact.phone, image: cont.image };
  const newName = contact.name.replace(/\s/g, '').toLowerCase();
  const fileName = `${contactsDirectory}/${newName}${contact.phone}.json`;
  // console.log(newStr.toLowerCase());
  // console.log(`${contactsDirectory}/${newName}${populus[i].phone}.json`);
  console.log(contact.image);
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
  const fileInfo = await FileSystem.getInfoAsync(`file://${fileName}`);
  console.log("file created: ", fileInfo.exists);

  data.users.push({ name: contact.name, fileName: `${newName}${contact.phone}.json`});
  return fileInfo.exists;
}

export default createContact;
