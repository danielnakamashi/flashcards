import { Card, Topic } from '@flashcards/core'
import { AddTopicService } from './AddTopicService'
import { AddTopicInput, AddTopicUseCase } from './AddTopicUseCase'

function createAddTopic(service: AddTopicService): AddTopicUseCase {
  return async function (token: string, data: AddTopicInput): Promise<Topic | null> {
    const topicData = await service.addTopic(token, data)

    if (topicData === null) {
      return null
    }

    return new Topic({
      id: topicData.id,
      name: topicData.name,
      cards: topicData.cards.map(card => new Card(card)),
    })
  }
}

export { createAddTopic }
