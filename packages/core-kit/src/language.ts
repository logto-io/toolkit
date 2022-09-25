import { LanguageTag, languageTagGuard } from '@logto/language-kit';

import { fallback } from '@/utilities';

export const getDefaultLanguage = (language: string): LanguageTag =>
  languageTagGuard.or(fallback<LanguageTag>('en')).parse(language);
