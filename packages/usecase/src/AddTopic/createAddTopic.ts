import { Card, Topic } from '@flashcards/core'
import { AddTopicService } from './AddTopicService'
import { AddTopicInput, AddTopicUseCase } from './AddTopicUseCase'

function createAddTopic(service: AddTopicService): AddTopicUseCase {
  return async function (token: string, data: AddTopicInput): Promise<Topic> {
    const topicData = await service.addTopic(token, data)
    return new Topic({
      id: topicData.id,
      name: topicData.name,
      cards: topicData.cards.map(card => new Card(card)),
    })
  }
}

export { createAddTopic }
