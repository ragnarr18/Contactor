import FileSystem from 'expo-file-system';
import data from '../../resources/USERS.json';

const { users } = data;

function getContactsByName(name) {
  const contacts = [];
  const contactsInfo = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      contacts.push(users[i].fileName);
      console.log(users[i].fileName);
    }
  }
  contacts.forEach((user) => {
    contactsInfo.push(
      require(`${user}`),
    );
  });
  // for x in contacts get their info and push into contactsInfo
  return contactsInfo;
}

export default getContactsByName;
