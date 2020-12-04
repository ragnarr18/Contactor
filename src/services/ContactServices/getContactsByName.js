import * as FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';
import andy from '../../resources/contacts/andysnow3554141.json';
import austin from '../../resources/contacts/austinharlow9471924.json';
import john from '../../resources/contacts/johndoe5008000.json';
import johnOther from '../../resources/contacts/johnotherdoe8984211.json';
import peter from '../../resources/contacts/peterparker5910492.json';
import steve from '../../resources/contacts/stevegoodman5023923.json';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

async function populateContacts() {
  const populus = [andy, austin, john, johnOther, peter, steve];
  const fileInfo = await FileSystem.getInfoAsync(`file://${contactsDirectory}`);
  if (!fileInfo.exists) {
    await setupDirectory();
    await FileSystem.writeAsStringAsync(`file://${contactsDirectory}/USERS.json`, JSON.stringify(data));
    for (let i = 0; i < populus.length; i++) {
      const newName = populus[i].name.replace(/\s/g, '').toLowerCase();
      const item = {
        name: populus[i].name, phone: populus[i].phone, image: populus[i].image, fileName: `${newName}${populus[i].phone}.json`,
      };
      await FileSystem.writeAsStringAsync(`file://${contactsDirectory}/${newName}${populus[i].phone}.json`, JSON.stringify(item));
    }
  }
  return true;
}

async function retriveInfo(user) {
  await populateContacts();
  try {
    const result = await FileSystem.readAsStringAsync(`file://${contactsDirectory}/${user}`);
    const jsonResult = JSON.parse(result);
    return jsonResult;
  } catch (e) {
    return null;
  }
}

async function getContactsByName(fileNames) {
  const contactsInfo = [];

  for (let i = 0; i < fileNames.length; i++) {
    const info = await retriveInfo(fileNames[i]);
    if (info !== null) {
      info.fileName = fileNames[i];
      contactsInfo.push(info);
    }
  }
  return contactsInfo;
}

export default getContactsByName;
