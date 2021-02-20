import { User } from '@flashcards/core'

interface GetCurrentUserUseCase {
  (): Promise<User | null>
}

export type { GetCurrentUserUseCase }
