import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const dataFile = `${process.cwd()}/src/data/db.json`;

// Read data from JSON file
async function readData() {
  try {
    const data = await fs.readFile(dataFile, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to read data:', err.message);
    throw new Error('Error reading data file.');
  }
}

// Write data to JSON file
async function writeData(data) {
  try {
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
    return 'File written successfully!';
  } catch (error) {
    console.error('Failed to write data:', error.message);
    throw new Error('Error writing data file.');
  }
}

async function generateUniqueId() {
  return uuidv4();
}

async function errorHandler(error, req, res, next) {
  console.debug('Error Handler: %o', error);
  const { message } = error;
  switch (message) {
    case 'not found':
      res.status(404).json({ error: 'No patient found with the provided ID.' });
      break;
    default:
      res.status(500).json({ error: 'An internal server error occurred.' });
  }
}

export {
  readData,
  writeData,
  generateUniqueId,
  errorHandler,
};
