import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'dev-secret';

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, SECRET);
};

export const passwordsMatch = (rawPassword, storedPassword) => {
    return rawPassword === storedPassword;
};