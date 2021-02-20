interface GetUserTokenUseCase {
  (): Promise<string | null>
}

export type { GetUserTokenUseCase }
