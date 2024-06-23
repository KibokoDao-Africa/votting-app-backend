import { Router } from 'express';
import { body } from 'express-validator';
import { createVote } from '../controllers/voteController';

const router = Router();

router.post('/vote', [
  body('vote').isIn(['yes', 'no']).withMessage('Vote must be either "yes" or "no"'),
], createVote);

export default router;
