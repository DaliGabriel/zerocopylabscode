import express from 'express';
import {
    getProfile,
    getBalance,
    updateUserDetails
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes below with JWT
router.use(verifyToken);

router.get('/me', getProfile);
router.get('/balance', getBalance);
router.put('/update', updateUserDetails);

export default router;
