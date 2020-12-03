import * as FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';
import andy from '../../resources/contacts/andysnow3554141.json';
import austin from '../../resources/contacts/austinharlow9471924.json';
import john from '../../resources/contacts/johndoe5008000.json';
import johnOther from '../../resources/contacts/johnotherdoe112.json';
import peter from '../../resources/contacts/peterparker5910492.json';
import steve from '../../resources/contacts/stevegoodman5023923.json';

const { users } = data;
// const directory = './src/resources/contacts/';
const directory = '../../resources/contacts';
const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

// const copyFile = async (file, newLocation) => FileSystem.copyAsync({
//   from: file,
//   to: newLocation,
// });
async function populateContacts() {
  const populus = [andy, austin, john, johnOther, peter, steve];
  const fileInfo = await FileSystem.getInfoAsync(`file://${contactsDirectory}`);
  // console.log(fileInfo.exists);
  if (!fileInfo.exists) {
    console.log('populateContacts');
    for (let i = 0; i < populus.length; i++) {
      await setupDirectory();
      const item = { name: populus[i].name, phone: populus[i].phone, image: populus[i].image };
      const newName = populus[i].name.replace(/\s/g, '').toLowerCase();
      // console.log(newStr.toLowerCase());
      // console.log(`${contactsDirectory}/${newName}${populus[i].phone}.json`);
      await FileSystem.writeAsStringAsync(`${contactsDirectory}/${newName}${populus[i].phone}.json`, JSON.stringify(item));
    }
  }
  // console.log('populateContacts complete');
  return true;
}

async function retriveInfo(user) {
  const search = await populateContacts();
  // let result = null;
  // var currentUser = {"phoneNumber": 112, "name": "ragnar"}
  // await setupDirectory();
  // await FileSystem.writeAsStringAsync(`${contactsDirectory}/${user}`, JSON.stringify(currentUser) )
  const fileInfo = await FileSystem.getInfoAsync(`${contactsDirectory}/${user}`);
  // console.log(fileInfo);
  try {
    const result = await FileSystem.readAsStringAsync(`${contactsDirectory}/${user}`);
    // console.log("result", result);
    const jsonResult = JSON.parse(result);
    console.log(jsonResult.phone);
    return jsonResult;
  } catch (e) {
    console.log('error', e);
  }
}
// return new Promise(resolve => {
//
//   return FileSystem.readAsStringAsync(`file://${directory}${user}`);
// })
// const currentUser = {};
// await setupDirectory();
// await FileSystem.writeAsStringAsync(`${contactsDirectory}/${user}`, JSON.stringify(currentUser));
// await copyFile(`file://${directory}/${user}`, `${contactsDirectory}/${user}`);
// if (search === true) {
//   try {
//     // result = await FileSystem.readAsStringAsync(`file://${directory}${user}`);
//     // console.log('write happened');
//     console.log("go search ");
//     const fileInfo = await FileSystem.getInfoAsync(`file://${contactsDirectory}/${user}`);
//     // console.log(fileInfo);
//     result = await FileSystem.readAsStringAsync(`file://${contactsDirectory}/${user}`);
//     console.log('result', result);
//
//     return result;
//   } catch (e) {
//     console.log('error', e);
//     return null;
//   }
// }

// return result;
// const info = await FileSystem.readAsStringAsync(`file://${directory}${user}`);
// return Promise.all(info.map(async (fileName) => {
//   console.log("filename", fileName);
//   // console.log(fileName === noDirWantedFile)
//   if (true) {
//     return {
//       value: await fileName.json(),
//     };
//   }
// }));

//   const json = await info.json();
//   console.log('info:', json);
//   return json;
// }

async function getContactsByName(fileNames) {
  console.log("getContactsByName");
  // const contacts = [];
  const contactsInfo = [];

  // get filenames
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].name === name) {
  //     contacts.push(users[i].fileName);
  //   }
  // }

  // get data from files
  // contacts.forEach(async (user) => {
  //   const info = await retriveInfo(user);
  //   // console.log("info", info);
  //   contactsInfo.push(info);
  //   console.log('item', contactsInfo.length);
  // });

  for (var i = 0; i < fileNames.length; i++) {
    const info = await retriveInfo(fileNames[i])
    contactsInfo.push(info);
  }
  // console.log("return in getContactsByName", contactsInfo[5].phone)
  return contactsInfo;
  // console.log('item', contactsInfo.length);
  // return contactsInfo;

  // console.log('size', contactsInfo.size());
  // return contactsInfo;
}

export default getContactsByName;
