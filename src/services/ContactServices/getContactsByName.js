import FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';

const { users } = data;
// const directory = './src/resources/contacts/';
const directory = '../../resources/contacts/';

async function retriveInfo(user) {
  const info = await FileSystem.readAsStringAsync(`file://${directory}${user}`);
  const json = await info.json();
  console.log('info:', json);
  return json;
}

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
