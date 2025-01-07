import { z } from 'zod';

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.number().min(1),
  image: z.array(z.string().min(1, 'Minst en bild krävs')),
  category: z.enum(['Skydd', 'Vattenrening', 'Övrigt']),
  isFeatured: z.boolean().optional(),
});
