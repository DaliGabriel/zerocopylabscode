import request from 'supertest';
import express from 'express';
import userRoutes from '../../routes/userRoutes.js';

jest.mock('../../middleware/authMiddleware.js', () => ({
    verifyToken: (req, res, next) => {
        req.userId = 'mock-user-id';
        next();
    }
}));

jest.mock('../../controllers/userController.js', () => ({
    getProfile: (req, res) => {
        res.status(200).json({ message: 'Mocked profile' });
    },
    getBalance: (req, res) => {
        res.status(200).json({ balance: '$1,000.00' });
    },
    updateUserDetails: (req, res) => {
        res.status(200).json({ message: 'Mocked user updated' });
    }
}));

const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);

describe('User Routes', () => {
    it('GET /api/user/me should call getProfile', async () => {
        const res = await request(app).get('/api/user/me');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Mocked profile' });
    });

    it('GET /api/user/balance should return balance', async () => {
        const res = await request(app).get('/api/user/balance');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ balance: '$1,000.00' });
    });

    it('PUT /api/user/update should call updateUserDetails', async () => {
        const res = await request(app)
            .put('/api/user/update')
            .send({
                name: { first: 'New', last: 'User' },
                email: 'new@example.com'
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Mocked user updated' });
    });
});
