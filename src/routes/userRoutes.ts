import { Router } from 'express';
import { body } from 'express-validator';
import { createUser } from '../controllers/userController.js';

const router = Router();

router.post('/user', [
  body('name').notEmpty().withMessage('Name is required'),
  body('idNumber').notEmpty().withMessage('ID number is required'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  body('email').optional().isEmail().withMessage('Email must be valid'),
], createUser);

export default router;
