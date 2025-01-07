import express from 'express';
import { authController } from '../controllers/auth';
import { validate, loginSchema, registerSchema } from '../middleware/validate';

const router = express.Router();

router.post('/login', validate(loginSchema), authController.login);
router.post('/register', validate(registerSchema), authController.register);

export default router; 