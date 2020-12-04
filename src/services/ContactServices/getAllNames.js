import data from '../../resources/USERS.json';

const { users } = data;


function getFileName(user) {
  return user.fileName;
}

function getAllNames(searchTerm) {
  const fileNames = [];
  // const usersjsonCreated = await FileSystem.getInfoAsync(`file://${contactsDirectory}/USERS.json`);
  // console.log("usersjsonCreated: ", usersjsonCreated);
  const currentUsers = users.filter(
    (user) => user.name.toLowerCase()
      .includes(searchTerm.toString().toLowerCase()),
  );
  for (let i = 0; i < currentUsers.length; i++) {
    fileNames.push(getFileName(currentUsers[i]));
  }
  return fileNames;
}

export default getAllNames;
