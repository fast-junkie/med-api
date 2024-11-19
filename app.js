import express from 'express';
import patientRouter from './src/routes/patientRouter.js';
import { errorHandler } from './src/services/helpersService.js';

const app = express();
const port = 2112;

app.use(express.json());
app.use('/patients', patientRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.debug('--med-api: %o', port);
});
