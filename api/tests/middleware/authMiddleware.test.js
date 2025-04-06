import { verifyToken } from '../../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken');

describe('verifyToken middleware', () => {
    const next = jest.fn();
    const res = {
        status: jest.fn(() => res),
        json: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return 401 if token is missing', () => {
        const req = { headers: {} };

        verifyToken(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Missing token' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 if token is invalid', () => {
        const req = {
            headers: {
                authorization: 'Bearer invalid.token'
            }
        };

        jwt.verify.mockImplementation(() => {
            throw new Error('Invalid token');
        });

        verifyToken(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should set req.userId and call next() for valid token', () => {
        const decoded = { id: '123' };
        jwt.verify.mockReturnValue(decoded);

        const req = {
            headers: {
                authorization: 'Bearer valid.token'
            }
        };

        verifyToken(req, res, next);

        expect(req.userId).toBe('123');
        expect(next).toHaveBeenCalled();
    });
});
