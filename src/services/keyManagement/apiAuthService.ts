import { OpenAPI } from "../../openapi-rq/requests/core/OpenAPI";

export class ApiAuthService {
  private static instance: ApiAuthService;
  private currentToken: string | null = null;

  private constructor() {}

  public static getInstance(): ApiAuthService {
    if (!ApiAuthService.instance) {
      ApiAuthService.instance = new ApiAuthService();
    }
    return ApiAuthService.instance;
  }

  /**
   * Set the Bearer token for API requests (token received from PoW verification)
   */
  public setBearerToken(token: string): void {
    this.currentToken = token;
    OpenAPI.TOKEN = token;
  }

  /**
   * Clear the Bearer token
   */
  public clearBearerToken(): void {
    this.currentToken = null;
    OpenAPI.TOKEN = undefined;
  }

  /**
   * Get the current Bearer token
   */
  public getCurrentToken(): string | null {
    return this.currentToken;
  }

  /**
   * Check if a valid token is set
   */
  public hasValidToken(): boolean {
    return this.currentToken !== null && this.currentToken !== undefined;
  }
}

// Export singleton instance
export const apiAuthService = ApiAuthService.getInstance();
