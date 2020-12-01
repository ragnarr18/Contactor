import data from '../../resources/USERS.json';

const { users } = data;

function getAllNames() {
  return users.map((u) => u.name);
}

export default getAllNames;
