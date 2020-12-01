import * as FileSystem from 'expo-file-system';
import { loadImage } from './addImage';

const imageDirectory = `${FileSystem.documentDirectory}images`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(imageDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
};
const getImage = async (wantedFile) => {
  console.log('PropTypes');
  await setupDirectory();
  console.log('getImage', wantedFile);
  const result = await FileSystem.readDirectoryAsync(imageDirectory);
  return Promise.all(result.map(async (fileName) => fileName === wantedFile({
    name: fileName,
    file: await loadImage(fileName),
  })));
};

export default getImage;
