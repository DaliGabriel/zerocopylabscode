import {
    findUserById,
    findUserByEmail,
    updateUser
} from '../../services/userService.js';


jest.mock('../../db/db.js', () => ({
    getDB: () => ({
        data: {
            users: [
                {
                    _id: '5410953eb0e0c0ae25608277',
                    email: 'henderson.updated@geeknet.net',
                    name: { first: 'Henderson', last: 'Updated' },
                    balance: '$3,585.69',
                    phone: '+1 (936) 451-3590',
                    address: '121 National Drive, Cotopaxi, Michigan, 8240',
                }
            ]
        },
        write: jest.fn()
    })
}));

describe('userService', () => {
    describe('findUserById', () => {
        it('should return user when ID matches', () => {
            const user = findUserById('5410953eb0e0c0ae25608277');
            expect(user).toBeDefined();
            expect(user.email).toBe('henderson.updated@geeknet.net');
        });

        it('should return undefined for non-existent ID', () => {
            const user = findUserById('non-existent-id');
            expect(user).toBeUndefined();
        });
    });

    describe('findUserByEmail', () => {
        it('should return user when email matches', () => {
            const user = findUserByEmail('henderson.updated@geeknet.net');
            expect(user).toBeDefined();
            expect(user._id).toBe('5410953eb0e0c0ae25608277');
        });

        it('should return undefined for non-existent email', () => {
            const user = findUserByEmail('nope@email.com');
            expect(user).toBeUndefined();
        });
    });

    describe('updateUser', () => {
        it('should update user fields and call db.write', async () => {
            const updates = {
                name: { first: 'UpdatedName', last: 'Final' },
                email: 'new@email.com'
            };

            const updatedUser = await updateUser('5410953eb0e0c0ae25608277', updates);

            expect(updatedUser).toMatchObject(updates);
        });

        it('should return null if user not found', async () => {
            const result = await updateUser('invalid-id', { email: 'fail@test.com' });
            expect(result).toBeNull();
        });
    });
});
