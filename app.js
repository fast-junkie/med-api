import express from 'express';
import patientRouter from './src/routes/patientRouter.js';

const app = express();

app.use('/patients', patientRouter);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.debug('Error Handler: %o', error);
  const { message } = error;
  if (message === 'not found') {
    res.status(404).json({ error: 'No patient found with the provided ID.' });
  } else {
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
