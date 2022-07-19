import express from 'express';
import fs from 'fs';
import imageProcessing from '../Utilities/imageProcessing';
import { checkParams, Params } from '../Utilities/checkParameters';

const routes = express.Router();

routes.get('/images', async (req: express.Request, res: express.Response) : Promise<void> => {
  const fileName = req.query.filename as string;

  const width = Number(req.query.width);

  const height = Number(req.query.height);

  const newpath = `./Images/thumb/${fileName}-${width}-${height}.jpg`;

  if (checkParams(req.query as unknown as Params)) {
    // check if the requested image with the requested size already exists
    if (fs.existsSync(newpath)) {
      // if it does, send the existing image as response
      fs.readFile(newpath, function (err, data) {
        if (err) throw err;

        res.end(data);
      });
    } else {
      const file = await imageProcessing(fileName, width, height);

      if (!String(file).includes('Error')) {
        fs.readFile(newpath, function (err, data) {
          if (err) throw err;

          res.end(data);
        });
      } else {
        res
          .status(404)
          .send(
            'Error: File Does Not Exist In Server, please verify the file name.'
          );
      }
    }
  } else {
    res
      .status(500)
      .send(
        'Please set a filename, width and height as parameters in the url (all 3 are mandatory and width and height must be numbers).'
      );
  }
});

export default routes;
