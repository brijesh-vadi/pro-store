import { z } from 'zod';
import { formatePrice } from './utils';

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatePrice(Number(value))), {
  message: 'Price must have exactly two decimals.',
});

export const productSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 chars.' }),
  slug: z.string().min(3, { message: 'Slug must be at least 3 chars.' }),
  category: z.string().min(3, { message: 'Category must be at least 3 chars.' }),
  brand: z.string().min(3, { message: 'Brand must be at least 3 chars.' }),
  description: z.string().min(3, { message: 'Description must be at least 3 chars.' }),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, { message: 'Product must have at least one image.' }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 chars.' }),
});
