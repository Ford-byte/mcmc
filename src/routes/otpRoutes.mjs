import express from 'express';
import { getOtp, addOtp } from '../controllers/otpController.mjs';
import { authenticateToken } from '../middlewares/authenticateToken.mjs';

const router = express.Router();

router.post('/otp', addOtp);
router.get('/otp', getOtp);

export { router };
