import express from 'express';
import barcode, { optionKeys } from '../services/barcode';
import client from '../services/cache';
import { pick } from '../utils/helpers';
import config from '../config';
import path from 'path';
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
    let cacheKey = `barcode_${req.params.code}`;

    const options = pick(req.query, optionKeys);

    for (const key in options) {
      cacheKey += `_${key}_${options[key]}`;
    }

    const fileName = await useCache(cacheKey, () => {
      return barcode.handle(req.params.code, req.query, cacheKey);
    });

    res.sendFile(fileName, {
      root: path.resolve('./', 'public'),
    });
  } catch (err) {
    console.log(err);
    res.status(404).send('Sorry, cant find that');
  }
};

const useCache = async (cacheKey: string, callback: Function = () => {}) => {
  try {
    if (!config.cacheEnabled) return callback();

    const cache = await client();

    const cachedData = await cache.get(cacheKey);

    if (cachedData) return cachedData;

    const data = callback();

    await cache.set(cacheKey, data);

    return data;
  } catch (e) {
    return callback();
  }
};
