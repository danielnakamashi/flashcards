type AddCardRequest = {
  topicId: string
  card: {
    question: string
    answer: string
  }
}

export type { AddCardRequest }
