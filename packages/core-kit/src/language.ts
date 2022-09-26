import { LanguageTag, languageTagGuard } from '@logto/language-kit';
import { z } from 'zod';

import { fallback } from '@/utilities';

export const getDefaultLanguage = (language: string): LanguageTag =>
  languageTagGuard.or(fallback<LanguageTag>('en')).parse(language);

// TODO: remove the old language related type, constants and utility function after merging Localization feature into master
export const languageKeys = ['en', 'fr', 'pt-PT', 'zh-CN', 'tr-TR', 'ko-KR'] as const;
export const languageKeyGuard = z.enum(languageKeys);
export type LanguageKey = z.infer<typeof languageKeyGuard>;

export const getDeprecatedDefaultLanguage = (language: string): LanguageKey => {
  return languageKeyGuard.or(fallback<LanguageKey>('en')).parse(language);
};
