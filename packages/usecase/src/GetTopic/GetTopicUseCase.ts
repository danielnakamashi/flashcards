import { Topic } from '@flashcards/core'

interface GetTopicUseCase {
  (token: string, topicId: string): Promise<Topic>
}

export type { GetTopicUseCase }
