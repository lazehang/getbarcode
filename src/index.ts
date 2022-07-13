import express from 'express';
import cors from 'cors';
import { engine } from 'express-handlebars';
import barcode from './services/barcode';
import client from './services/cache';

const PORT = process.env.PORT || 4001;

const app = express();

app.set('view engine', 'handlebars');

app.engine('handlebars', engine());

app.set('views', './templates');

app.use(express.static('public'));

app.use(cors());

app.get('/', (req, res) => {
  return res.render('index');
});

app.get('/generate/:code', async (req, res) => {
  const cacheKey = `barcode_${req.params.code}_${req.query?.height || '0'}`;
  const cache = await client();
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return res.sendFile(cachedData, {
      root: __dirname + '/../public',
    });
  }

  const fileName = barcode.handle(req.params.code, req.query, cacheKey);

  await cache.set(cacheKey, fileName);

  res.sendFile(fileName, {
    root: __dirname + '/../public',
  });
});

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});

console.log('TypeScript Eslint Prettier Starter Template!');
