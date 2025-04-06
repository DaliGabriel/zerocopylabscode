import { findUserById, updateUser } from '../services/userService.js';

export const getProfile = (req, res) => {
    const user = findUserById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
        user
    });
};

export const getBalance = (req, res) => {
    const user = findUserById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ balance: user.balance });
};

export const updateUserDetails = async (req, res) => {
    const { name, email } = req.body;
    const updatedUser = await updateUser(req.userId, { name, email });

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User updated', user: updatedUser });
};
