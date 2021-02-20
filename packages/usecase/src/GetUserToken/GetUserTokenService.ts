interface GetUserTokenService {
  getUserToken(): Promise<string | null>
}

export type { GetUserTokenService }
