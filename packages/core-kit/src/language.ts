import type { LanguageTag } from '@logto/language-kit';
import { languageTagGuard } from '@logto/language-kit';
import { z } from 'zod';

import { fallback } from './utilities/index';

export const getDefaultLanguageTag = (language: string): LanguageTag =>
  languageTagGuard.or(fallback<LanguageTag>('en')).parse(language);

/** @deprecated */
export const languageKeys = ['en', 'fr', 'pt-PT', 'zh-CN', 'tr-TR', 'ko-KR'] as const;

/** @deprecated */
export const languageKeyGuard = z.enum(languageKeys);

/** @deprecated */
export type LanguageKey = z.infer<typeof languageKeyGuard>;

/** @deprecated */
export const getDefaultLanguage = (language: string): LanguageKey => {
  return languageKeyGuard.or(fallback<LanguageKey>('en')).parse(language);
};
