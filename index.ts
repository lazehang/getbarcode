import express from 'express';
import cors from 'cors';
import barcodeRoutes from './routes/barcodeRoutes';
import helmet from 'helmet';

const PORT = process.env.PORT || 4001;

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: 'cross-origin',
    },
  })
);

app.use(express.static('public'));

app.use(cors());

app.use('/', barcodeRoutes());

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});
