export interface ApiError {
  [key: string] : string[]|ApiError
}

export interface ApiResponse {
  data: mixed;
  limit?: number;
  message: string;
  offset?: number;
  status: number;
  success: boolean;
  total?: number;
  errors: ApiError
}
