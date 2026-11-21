/**
 * 숫자를 원화 표기 문자열로 변환합니다.
 * @example formatPrice(12000) // "12,000원"
 */
export function formatPrice(value: number): string {
  return `${value.toLocaleString('ko-KR')}원`;
}
