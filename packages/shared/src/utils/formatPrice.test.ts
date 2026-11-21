import { describe, expect, it } from 'vitest';

import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('천 단위 구분 기호와 "원"을 붙인다', () => {
    expect(formatPrice(12000)).toBe('12,000원');
  });

  it('0 을 처리한다', () => {
    expect(formatPrice(0)).toBe('0원');
  });
});
