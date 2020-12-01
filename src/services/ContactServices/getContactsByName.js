import FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';

const { users } = data;
const directory = '../../resources/contacts/';

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
  console.log(directory + contacts[0]);
  return contacts.forEach((user) => {
    try {
      FileSystem.readAsStringAsync(`file://${directory}${user}`)
        .then((res) => res.json())
        .then((json) => contactsInfo.push(json))
    } catch (e) {
      console.log("couldn't find file: ", e);
    }
  });

  // console.log('size', contactsInfo.size());
  // return contactsInfo;
}

export default getContactsByName;
