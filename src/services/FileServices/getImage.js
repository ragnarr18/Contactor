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
  const splitWantedFile = wantedFile.split('/');
  const noDirWantedFile = splitWantedFile[splitWantedFile.length -1];
  await setupDirectory();
  const result = await FileSystem.readDirectoryAsync(imageDirectory);
  return Promise.all(result.map(async (fileName) => {
    if (fileName === noDirWantedFile) {
      return {
        name: fileName,
        file: await loadImage(fileName),
      };
    }
  }));
};

export default getImage;
