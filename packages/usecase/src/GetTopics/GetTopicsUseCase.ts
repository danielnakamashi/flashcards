import { Topic } from '@flashcards/core'

interface GetTopicsUseCase {
  (token: string): Promise<Topic[]>
}

export type { GetTopicsUseCase }
