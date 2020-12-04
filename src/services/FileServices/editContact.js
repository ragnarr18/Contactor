import * as FileSystem from 'expo-file-system';
import defaultProfilePicture from '../../resources/PROFILE_PIC.json';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactsDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactsDirectory);
  }
};

async function editContact(contact) {
  await setupDirectory();
  const newContact = {
    name: contact.name, phone: contact.phone, image: contact.image, fileName: contact.fileName,
  };
  const path = `${contactsDirectory}/${contact.fileName}`;

  if (contact.image === '') {
    newContact.image = defaultProfilePicture.image;
  }
  await FileSystem.writeAsStringAsync(path, JSON.stringify(newContact));
  return 1;
}

export default editContact;
