import express from 'express';
import { createDep } from '../controllers/dep.controllers.js';

const router = express.Router();

router.post('/department',createDep)

export default router;