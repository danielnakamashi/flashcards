import { Card } from '@flashcards/core'

interface AddCardInput {
  topicId: string
  question: string
  answer: string
}

interface AddCardUseCase {
  (token: string, input: AddCardInput): Promise<Card>
}

export type { AddCardUseCase, AddCardInput }
