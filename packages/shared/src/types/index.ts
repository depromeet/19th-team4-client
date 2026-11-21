/**
 * API 공통 응답 형태
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}
