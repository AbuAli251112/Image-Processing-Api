import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const imageProcessing = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const imageInput = `./Images/full/${filename}.jpg`;
  const imageOutputFolder = `./Images/thumb`;
  const imageOutputFile = `./Images/thumb/${filename}-${width}-${height}.jpg`;

  if (!fs.existsSync(imageOutputFolder)) {
    await fsPromises.mkdir(imageOutputFolder);
  }

  try {
    await sharp(imageInput).resize(width, height).toFile(imageOutputFile);

    return imageOutputFile;
  } catch (error) {
    return error as string;
  }
};

export default imageProcessing;
