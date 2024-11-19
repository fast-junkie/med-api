import express from 'express';
import {
  createPatient, getAllPatients, getPatientById, updatePatient, deletePatient,
} from '../services/patientService.js';

const router = express.Router();

// GET /patients
router.get('/', async (req, res, next) => {
  try {
    const patients = await getAllPatients();
    res.status(200).json(patients);
  } catch (err) {
    next(err);
  }
});

// GET /patients/:id
router.get('/:id', async (req, res, next) => {
  try {
    const patient = await getPatientById(req.params.id);
    res.status(200).json(patient);
  } catch (err) {
    next(err);
  }
});

// POST /patients
router.post('/', async (req, res, next) => {
  try {
    const patient = await createPatient(req.body);
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
});

// PUT /patients/:id
router.put('/:id', async (req, res, next) => {
  try {
    const patient = await updatePatient(req.params.id, req.body);
    res.status(200).json(patient);
  } catch (err) {
    next(err);
  }
});

// DELETE /patients/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await deletePatient(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
