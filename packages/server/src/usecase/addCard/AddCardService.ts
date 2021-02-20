import { CardRepo } from '../protocols'

interface AddCardService {
  addCard: (
    uid: string,
    topicId: string,
    card: { question: string; answer: string },
  ) => Promise<CardRepo>
}

export type { AddCardService }
