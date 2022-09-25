import { z } from 'zod';

import { languages } from './const';

export type LanguageTag = keyof typeof languages;

export const isLanguageTag = (value: unknown): value is LanguageTag =>
  typeof value === 'string' && value in languages;

export const languageTagGuard: z.ZodType<LanguageTag> = z
  .any()
  .refine((value: unknown) => isLanguageTag(value));