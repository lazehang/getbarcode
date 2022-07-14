import express from 'express';
import cors from 'cors';
import { create } from 'express-handlebars';
import barcodeRoutes from './routes/barcodeRoutes';
import helmet from 'helmet';

const PORT = process.env.PORT || 4001;

const app = express();

app.use(helmet());

const hbs = create({
  partialsDir: './views/partials',
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('views', './views/templates');

app.use(express.static('public'));

app.use(cors());

app.use('/', barcodeRoutes());

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});
