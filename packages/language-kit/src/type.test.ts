import { languageTagGuard } from './type';

describe('languageTagGuard', () => {
  it('should pass when input is a valid language key', () => {
    expect(languageTagGuard.safeParse('en-GB').success).toBeTruthy();
    expect(languageTagGuard.safeParse('zh-CN').success).toBeTruthy();
  });

  it('should fail when input is not a valid language key', () => {
    for (const invalidLanguageKey of [undefined, '', 'xx-XX']) {
      expect(languageTagGuard.safeParse(invalidLanguageKey).success).toBeFalsy();
    }
  });
});
