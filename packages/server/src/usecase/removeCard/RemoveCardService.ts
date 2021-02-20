interface RemoveCardService {
  removeCard: (uid: string, topicId: string, cardId: string) => Promise<boolean>
}

export type { RemoveCardService }
