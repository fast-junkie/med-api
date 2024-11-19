import { generateUniqueId, readData, writeData } from './helpersService.js';

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

async function createPatient(patient) {
  const patients = await readData();
  const uuid = await generateUniqueId();
  const newPatient = { ...patient, id: uuid };
  patients.push(newPatient);
  await writeData(patients);
  return newPatient;
}

async function updatePatient(id, patient) {
  const patients = await readData();
  const index = patients.findIndex((p) => p.id === id);
  if (index === -1) {
    throw new Error('not found');
  }
  patients[index] = { ...patient, id };
  await writeData(patients);
  return patients[index];
}

async function deletePatient(id) {
  const patients = await readData();
  const filteredPatients = patients.filter((p) => p.id !== id);

  if (filteredPatients.length === patients.length) {
    throw new Error('not found');
  }
  await writeData(filteredPatients);
}

export {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
