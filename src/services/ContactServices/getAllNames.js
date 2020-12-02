import data from '../../resources/USERS.json';

const { users } = data;

function getAllNames() {
  return users.map((u) => u.fileName);
}

export default getAllNames;
