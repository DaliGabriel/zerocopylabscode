import { getDB } from '../db/db.js';

export const findUserById = (id) => {
    const db = getDB();
    return db.data.users.find(user => user._id === id);
};

export const findUserByEmail = (email) => {
    const db = getDB();
    return db.data.users.find(user => user.email === email);
};

export const updateUser = async (id, updates) => {
    const db = getDB();
    const user = db.data.users.find(user => user._id === id);
    if (!user) return null;

    Object.assign(user, updates);
    await db.write();
    return user;
};