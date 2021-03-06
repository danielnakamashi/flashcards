import { Topic } from '@flashcards/core'

interface AddTopicInput {
  name: string
}

interface AddTopicUseCase {
  (token: string, data: AddTopicInput): Promise<Topic | null>
}

export type { AddTopicUseCase, AddTopicInput }
