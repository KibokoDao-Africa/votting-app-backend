import { Request, Response } from 'express';
import models from '../models';
import { validationResult } from 'express-validator';
import { makeVote } from '../services/starknetService';
import { processPayment } from '../services/paymentService';

export const createVote = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.headers['user-id'] as string;
  const { vote } = req.body;

  try {
    // Verify user exists
    const user = await models.User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Process payment
    const paymentSuccess = await processPayment(user.phoneNumber);
    if (!paymentSuccess) {
      return res.status(400).json({ message: 'Payment failed' });
    }

    // Call smart contract function
    await makeVote(userId, vote);

    const newVote = await models.Vote.create({ userId, vote });
    res.status(201).json(newVote);
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to create vote', error: error.message });
  }
};
