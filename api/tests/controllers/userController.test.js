import {
    getProfile,
    getBalance,
    updateUserDetails
} from '../../controllers/userController.js';

import * as userService from '../../services/userService.js';

jest.mock('../../db/db.js', () => ({
    getDB: () => ({
        data: {
            users: [
                {
                    _id: '123',
                    email: 'test@example.com',
                    password: 'testpass',
                    balance: '$1,234.00',
                    name: { first: 'John', last: 'Doe' }
                }
            ]
        }
    })
}));

describe('User Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getProfile', () => {
        it('should return user if found', () => {
            const mockUser = { name: { first: 'John', last: 'Doe' } };
            jest.spyOn(userService, 'findUserById').mockReturnValue(mockUser);

            const req = { userId: '123' };
            const res = { json: jest.fn(), status: jest.fn(() => res) };

            getProfile(req, res);

            expect(res.json).toHaveBeenCalledWith({ user: mockUser });
        });

        it('should return 404 if user not found', () => {
            jest.spyOn(userService, 'findUserById').mockReturnValue(null);

            const req = { userId: 'notfound' };
            const res = { json: jest.fn(), status: jest.fn(() => res) };

            getProfile(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });
    });

    describe('getBalance', () => {
        it('should return balance if user found', () => {
            const mockUser = { balance: '$1,000.00' };
            jest.spyOn(userService, 'findUserById').mockReturnValue(mockUser);

            const req = { userId: '123' };
            const res = { json: jest.fn(), status: jest.fn(() => res) };

            getBalance(req, res);

            expect(res.json).toHaveBeenCalledWith({ balance: mockUser.balance });
        });

        it('should return 404 if user not found', () => {
            jest.spyOn(userService, 'findUserById').mockReturnValue(null);

            const req = { userId: 'notfound' };
            const res = { json: jest.fn(), status: jest.fn(() => res) };

            getBalance(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });
    });

    describe('updateUserDetails', () => {
        it('should return updated user', async () => {
            const updatedUser = {
                name: { first: 'Jane', last: 'Doe' },
                email: 'jane@example.com'
            };
            jest.spyOn(userService, 'updateUser').mockResolvedValue(updatedUser);

            const req = {
                userId: '123',
                body: {
                    name: { first: 'Jane', last: 'Doe' },
                    email: 'jane@example.com'
                }
            };
            const res = { json: jest.fn(), status: jest.fn(() => res) };

            await updateUserDetails(req, res);

            expect(res.json).toHaveBeenCalledWith({
                message: 'User updated',
                user: updatedUser
            });
        });

        it('should return 404 if update fails', async () => {
            jest.spyOn(userService, 'updateUser').mockResolvedValue(null);

            const req = {
                userId: 'notfound',
                body: {
                    name: { first: 'Test', last: 'User' },
                    email: 'fail@example.com'
                }
            };
            const res = { json: jest.fn(), status: jest.fn(() => res) };

            await updateUserDetails(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });
    });
});
