import { Request, Response } from 'express';
import models from '../models/index.js';
import axios from 'axios';
import { validationResult } from 'express-validator';

export const createUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, idNumber, phoneNumber, email } = req.body;

  // Validate ID number using external API
  try {
    const response = await axios.post('https://api.prod.metamap.com/govchecks/v1/ke/iprs', { idNumber });
    if (response.data.valid) {
      const user = await models.User.create({ name, idNumber, phoneNumber, email });
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: 'Invalid ID number' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to validate ID number' });
  }
};
