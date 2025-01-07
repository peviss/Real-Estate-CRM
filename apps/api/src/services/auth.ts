import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/database';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import { AppError } from '../middleware/error-handler';

export class AuthService {
  async login(email: string, password: string) {
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (!user.length) {
      throw new AppError(401, 'Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);
    if (!isValidPassword) {
      throw new AppError(401, 'Invalid credentials');
    }

    const token = jwt.sign(
      { id: user[0].id, email: user[0].email, role: user[0].role },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    return { token, user: { ...user[0], password: undefined } };
  }

  async register(data: { email: string; password: string; fullName: string }) {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, data.email))
      .limit(1);

    if (existingUser.length) {
      throw new AppError(400, 'Email already registered');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db
      .insert(users)
      .values({
        ...data,
        password: hashedPassword,
        role: 'user'
      })
      .returning();

    return { ...newUser[0], password: undefined };
  }
}

export const authService = new AuthService(); 