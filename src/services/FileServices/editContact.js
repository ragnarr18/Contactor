import * as FileSystem from 'expo-file-system';
// import { v4 as uuidv4 } from 'uuid';
// import data from '../../resources/USERS.json';
import defaultProfilePicture from '../../resources/PROFILE_PIC.json';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

async function editContact(contact) {
  await setupDirectory();
  const newContact = {
    name: contact.name, phone: contact.phone, image: contact.image, fileName: contact.fileName,
  };
  // const newName = contact.name.replace(/\s/g, '').toLowerCase();
  // const fileName = `${contactsDirectory}/${newName}${contact.phone}.json`;
  // const id = uuidv4();
  const path = `${contactsDirectory}/${contact.fileName}`;
  // console.log(newStr.toLowerCase());
  // console.log(`${contactsDirectory}/${newName}${populus[i].phone}.json`);
  // console.log("fileName: ", contact.fileName);
  const result = await FileSystem.readAsStringAsync(`file://${contactsDirectory}/${contact.fileName}`);
  // console.log("result", result);
  const jsonResult = JSON.parse(result);
  // console.log(jsonResult.phone);
  console.log("what was before: ", jsonResult.phone);
  console.log("what is  now: ", contact.phone);

  if (contact.image === '') {
    newContact.image = defaultProfilePicture.image;
  }
  await FileSystem.writeAsStringAsync(path, JSON.stringify(newContact));
  const check = await FileSystem.readAsStringAsync(`file://${contactsDirectory}/${contact.fileName}`);
  // console.log("result", result);
  const jsoncheck = JSON.parse(check);
  console.log("number afterchange in file", jsoncheck.phone);

  // data.users.push({ name: contact.name, fileName: `${newName}${contact.phone}.json` });
  // data.users.push({ name: contact.name, fileName: `${id}.json` });
  return 1;
}

export default editContact;
