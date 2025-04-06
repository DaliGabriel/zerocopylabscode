import { generateToken, verifyToken, passwordsMatch } from '../../utils/auth.js';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'mocked-token'),
    verify: jest.fn(() => ({ id: 'mocked-id' })),
}));

describe('auth utils (with mocked jwt)', () => {
    describe('passwordsMatch', () => {
        it('should return true for matching passwords', () => {
            expect(passwordsMatch('123', '123')).toBe(true);
        });

        it('should return false for different passwords', () => {
            expect(passwordsMatch('123', 'abc')).toBe(false);
        });
    });

    describe('generateToken', () => {
        it('should return a mocked JWT token', () => {
            const token = generateToken({ id: 'user' });
            expect(token).toBe('mocked-token');
            expect(jwt.sign).toHaveBeenCalledWith({ id: 'user' }, expect.any(String), { expiresIn: '1h' });
        });
    });

    describe('verifyToken', () => {
        it('should return mocked decoded payload', () => {
            const decoded = verifyToken('mocked-token');
            expect(decoded).toEqual({ id: 'mocked-id' });
            expect(jwt.verify).toHaveBeenCalledWith('mocked-token', expect.any(String));
        });
    });
});
