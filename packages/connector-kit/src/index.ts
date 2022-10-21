import { isLanguageTag, LanguageTag } from '@logto/language-kit';
import { ZodType } from 'zod';

import { ConnectorError, ConnectorErrorCodes } from './types';

export * from './types';

export function validateConfig<T>(config: unknown, guard: ZodType): asserts config is T {
  const result = guard.safeParse(config);

  if (!result.success) {
    throw new ConnectorError(ConnectorErrorCodes.InvalidConfig, result.error);
  }
}

export const parseJson = (
  jsonString: string,
  errorCode: ConnectorErrorCodes = ConnectorErrorCodes.InvalidResponse,
  errorPayload?: unknown
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(jsonString);
  } catch {
    throw new ConnectorError(errorCode, errorPayload ?? jsonString);
  }
};

// TODO: LOG-4446 change connector `ko-KR` to `ko`
const connectorSupportedLanguageTags = new Set(['en', 'fr', 'pt-PT', 'zh-CN', 'tr-TR', 'ko-KR']);

export const getConnectorSupportedLanguageTag = (language: string): LanguageTag =>
  isLanguageTag(language) && connectorSupportedLanguageTags.has(language) ? language : 'en';
