import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}images`;

// const copyFile = async (file, newLocation) => FileSystem.copyAsync({
//   from: file,
//   to: newLocation,
// });

export const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

export const loadImage = async (fileName) => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

export const addImage = async (imageLocation) => {
  console.log('imageLocation');
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];
  await copyFile(imageLocation, `${imageDirectory}/${fileName}`);
  console.log('after copyFile');

  return {
    name: fileName,
    file: await loadImage(fileName),
  };
};

// export default { addImage, loadImage };
