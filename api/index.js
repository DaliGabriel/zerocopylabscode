import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { loadDB } from './db/db.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

await loadDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => console.log(`API server running at http://localhost:${PORT}`));
