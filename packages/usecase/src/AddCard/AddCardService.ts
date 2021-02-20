import { CardData } from '../protocols'

interface AddCardServiceInput {
  topicId: string
  question: string
  answer: string
}

interface AddCardService {
  addCard: (token: string, input: AddCardServiceInput) => Promise<CardData>
}

export type { AddCardService, AddCardServiceInput }
