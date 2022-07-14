import express from 'express';
import barcode from '../services/barcode';
import client from '../services/cache';

export default function barcodeRoutes() {
  let router = express.Router();

  router.get('/', get);

  router.get('/generate/:code', generate);

  return router;
}

const get = (req: express.Request, res: express.Response) => {
  return res.render('index');
};

const generate = async (req: express.Request, res: express.Response) => {
  try {
    const cacheKey = `barcode_${req.params.code}_${req.query?.height || '0'}`;
    const cache = await client();
    const cachedData = await cache.get(cacheKey);
    if (cachedData) {
      return res.sendFile(cachedData, {
        root: __dirname + '/../../public',
      });
    }

    const fileName = barcode.handle(req.params.code, req.query, cacheKey);

    await cache.set(cacheKey, fileName);

    res.sendFile(fileName, {
      root: __dirname + '/../../public',
    });
  } catch (err) {
    res.status(404).send('Sorry, cant find that');
  }
};
