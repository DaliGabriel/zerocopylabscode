import express from 'express';
import bodyParser from 'body-parser';
import { login } from '../../api/controllers/authController.js';

const app = express();
app.use(bodyParser.json());

app.post('/api/login', login);

export default app;