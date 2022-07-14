import express from 'express';
import cors from 'cors';
import { engine } from 'express-handlebars';
import barcodeRoutes from './routes/barcodeRoutes';

const PORT = process.env.PORT || 4001;

const app = express();

app.set('view engine', 'handlebars');

app.engine('handlebars', engine());

app.set('views', './templates');

app.use(express.static('public'));

app.use(cors());

app.use('/', barcodeRoutes());

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});

console.log('TypeScript Eslint Prettier Starter Template!');
