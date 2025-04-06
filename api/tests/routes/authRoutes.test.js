import request from 'supertest';
import express from 'express';
import authRoutes from '../../routes/authRoutes.js';


jest.mock('../../controllers/authController.js', () => ({
    login: (req, res) => {
        return res.status(200).json({ message: 'Mocked login success' });
    }
}));

const app = express();
app.use(express.json());
app.use('/api', authRoutes);

describe('Auth Routes', () => {
    it('should call login controller on POST /api/login', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ email: 'test@mock.com', password: '123456' });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Mocked login success' });
    });
});
