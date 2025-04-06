import request from 'supertest';
import app from '../testApp.js';



jest.mock('../../db/db.js', () => ({
    getDB: () => ({
        data: {
            users: [
                {
                    _id: '5410953eb0e0c0ae25608277',
                    email: 'henderson.updated@geeknet.net',
                    password: '23derd*334',
                }
            ]
        }
    })
}));

jest.mock('../../utils/auth.js', () => ({
    passwordsMatch: (input, stored) => input === stored,
    generateToken: () => 'mocked-jwt-token'
}));

describe('POST /api/login', () => {
    it('should return 401 if credentials are invalid', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ email: 'wrong@email.com', password: 'badpassword' });

        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual({ message: 'Invalid credentials' });
    });

    it('should return token if credentials are valid', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({ email: 'henderson.updated@geeknet.net', password: '23derd*334' });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBe('mocked-jwt-token');
    });
});
