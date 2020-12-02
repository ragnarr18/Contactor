import * as FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';

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

const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

async function retriveInfo(user) {
  let result = null;
  var currentUser = {phoneNumber: 112, name: "ragnar"}
  await setupDirectory();
  await FileSystem.writeAsStringAsync(`${contactsDirectory}/${user}`, JSON.stringify(currentUser) )
  // await copyFile(`file://${directory}/${user}`, `${contactsDirectory}/${user}`);

  try {
    // result = await FileSystem.readAsStringAsync(`file://${directory}${user}`);
    console.log("write happened")
    result = await FileSystem.readAsStringAsync(`file://${contactsDirectory}/${user}`);
    var fileInfo = await FileSystem.getInfoAsync(`file://${contactsDirectory}`)
    console.log(fileInfo);
  } catch (e) {
    console.log("error", e);
  }
  console.log("result", result)
  return result;
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
}
//   const json = await info.json();
//   console.log('info:', json);
//   return json;
// }

async function getContactsByName(name) {
  const contacts = [];
  const contactsInfo = [];

  // get filenames
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      contacts.push(users[i].fileName);
    }
  }

  // get data from files
  contacts.forEach((user) => {
    const info = retriveInfo(user);
    contactsInfo.push(info);
  });
  console.log('item', contactsInfo);
  return contactsInfo;

  // console.log('size', contactsInfo.size());
  // return contactsInfo;
}

export default getContactsByName;
