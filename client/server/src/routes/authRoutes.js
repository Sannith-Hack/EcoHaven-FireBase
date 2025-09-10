// EcoHaven-FireBase/client/server/src/routes/authRoutes.js
import express from 'express';
import { getUserDetails, login, register, updateProfile } from '../controllers/authController.js';

const router = express.Router();

router.post('/register-user', register);
router.post('/login', login);
router.get('/get-userDetails', getUserDetails);
router.put('/update-profile', updateProfile);

export default router;