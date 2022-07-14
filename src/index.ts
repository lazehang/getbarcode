import express from 'express';
import cors from 'cors';
import { create } from 'express-handlebars';
import barcodeRoutes from './routes/barcodeRoutes';
import helmet from 'helmet';
import path from 'path';

const PORT = process.env.PORT || 4001;

const app = express();

app.use(helmet());

const hbs = create({
  partialsDir: path.join(__dirname, '../views/partials'),
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, '../views/templates'));

app.use(express.static('public'));

app.use(cors());

app.use('/', barcodeRoutes());

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});
