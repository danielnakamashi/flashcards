import { Card, Topic } from '@flashcards/core'
import { GetTopicService } from './GetTopicService'
import { GetTopicUseCase } from './GetTopicUseCase'

function createGetTopic(service: GetTopicService): GetTopicUseCase {
  return async function (token: string, topicId: string): Promise<Topic> {
    const topicData = await service.getTopic(token, topicId)
    return new Topic({
      id: topicData.id,
      name: topicData.name,
      cards: topicData.cards.map(card => new Card(card)),
    })
  }
}

export { createGetTopic }
