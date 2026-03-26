import { z } from 'zod';

export const campingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  price: z.coerce.number().positive('Price must be a positive number'),
  description: z.string().min(50, 'Description must be at least 50 characters long'),
  address: z.string().min(20, 'Address must be at least 20 characters long'),
  category: z.string().min(1, 'Please select a category'),
});

export const profileSchema = z.object({
  firstname: z.string()
  .min(5, 'First name must be at least 5 characters long')
  .max(30, 'First name must be at most 30 characters long'),
  lastname: z.string()
  .min(5, 'Last name must be at least 5 characters long')
  .max(30, 'Last name must be at most 30 characters long'),
});
