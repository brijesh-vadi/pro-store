import { productSchema } from '@/lib/validation';
import { z } from 'Zod';

export type Product = z.infer<typeof productSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
