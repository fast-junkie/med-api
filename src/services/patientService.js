import { readData } from '../../helpers.js';

async function getAllPatients() {
  return readData();
}

async function getPatientById(id) {
  const patients = await readData();
  const patient = patients.find((p) => p.id === id);
  if (!patient) {
    throw new Error('not found');
  }
  return patient;
}

export {
  getAllPatients,
  getPatientById,
};
