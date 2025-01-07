import { Request, Response } from 'express';
import { authService } from '../services/auth';
import { AppError } from '../middleware/error-handler';

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { token, user } = await authService.login(email, password);
      res.json({ token, user });
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Login failed' });
      }
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { email, password, fullName } = req.body;
      const user = await authService.register({ email, password, fullName });
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Registration failed' });
      }
    }
  }
}

export const authController = new AuthController(); 