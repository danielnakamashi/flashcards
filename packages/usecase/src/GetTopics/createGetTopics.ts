import { Card, Topic } from '@flashcards/core'
import { GetTopicsService } from './GetTopicsService'
import { GetTopicsUseCase } from './GetTopicsUseCase'

function createGetTopics(service: GetTopicsService): GetTopicsUseCase {
  return async function (token: string): Promise<Topic[]> {
    const topics = await service.getTopics(token)
    return topics.map(
      topicData =>
        new Topic({
          id: topicData.id,
          name: topicData.name,
          cards: topicData.cards.map(card => new Card(card)),
        }),
    )
  }
}

export { createGetTopics }
