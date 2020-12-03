import data from '../../resources/USERS.json';

const { users } = data;

function getAllNames() {
  return users.map((u) => {
    console.log(u.fileName);
    return u.fileName} );
}

export default getAllNames;
