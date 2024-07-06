import express from 'express';
import userRoutes from './routes/userRoutes.js';
import voteRoutes from './routes/voteRoutes.js';

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', voteRoutes);

export default app;
