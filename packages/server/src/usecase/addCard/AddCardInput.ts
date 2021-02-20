type AddCardInput = {
  uid: string
  topicId: string
  card: {
    question: string
    answer: string
  }
}

export type { AddCardInput }
