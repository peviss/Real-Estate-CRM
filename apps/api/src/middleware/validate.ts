import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from './error-handler';

export const validate = (schema: z.ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        next(new AppError(400, error.errors[0].message));
      }
      next(error);
    }
  };
};

// Property validation schemas
export const propertySchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10),
  price: z.number().positive(),
  bedrooms: z.number().int().positive(),
  bathrooms: z.number().positive(),
  area: z.number().positive(),
  address: z.string(),
  city: z.string(),
  state: z.string().length(2),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/),
  isAvailable: z.boolean().optional(),
  ownerId: z.number().optional()
});

export const updatePropertySchema = propertySchema.partial(); 


export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(2)
});