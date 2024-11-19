import express from 'express';
import { getAllPatients, getPatientById } from '../services/patientService.js';

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
// PUT /patients/:id
// DELETE /patients/:id

export default router;
