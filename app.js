import express from 'express';
import { readData } from './helpers.js';

const app = express();

// GET /patients
app.get('/patients', async (req, res) => {
  try {
    const results = await readData();
    res.status(200).json(results);
  } catch (err) {
    console.debug('Error: %o', err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET /patients/:id
app.get('/patients/:id', async (req, res) => {
  try {
    const results = await readData();
    const { id } = req.params;
    const patient = results.find((p) => p.id === id);
    if (!patient) {
      res.status(404).json({ error: `Patient not found for id: ${id}` });
    }
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /patients
// PUT /patients/:id
// DELETE /patients/:id

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
