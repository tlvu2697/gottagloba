/**
 * LearnWorlds API OAuth Token Response
 */
export type OAuthTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

/**
 * LearnWorlds API Error Response
 */
export type LearnWorldsError = {
  error?: string;
  error_description?: string;
  message?: string;
};

export type LearnWorldsMetadata = {
  page: number;
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
};
