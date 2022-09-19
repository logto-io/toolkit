import { z } from 'zod';

import { languageKeys } from '@/language/key';
import { fallback } from '@/utilities';

export const languageKeyGuard = z.enum(languageKeys);
export type LanguageKey = z.infer<typeof languageKeyGuard>;

export const getDefaultLanguage = (language: string): LanguageKey => {
  return languageKeyGuard.or(fallback<LanguageKey>('en')).parse(language);
};
