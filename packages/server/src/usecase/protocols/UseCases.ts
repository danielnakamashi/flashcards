import { AddCardUseCase } from '../addCard'
import { AddTopicUseCase } from '../addTopic'
import { GetTopicUseCase } from '../getTopic'
import { GetTopicsUseCase } from '../getTopics'
import { RemoveCardUseCase } from '../removeCard'
import { RemoveTopicUseCase } from '../removeTopic'

interface UseCases {
  addCard: AddCardUseCase
  addTopic: AddTopicUseCase
  getTopic: GetTopicUseCase
  getTopics: GetTopicsUseCase
  removeCard: RemoveCardUseCase
  removeTopic: RemoveTopicUseCase
}

export type { UseCases }
