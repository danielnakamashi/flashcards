import { TopicData, CardData } from '../protocols'
import { AddTopicService } from './AddTopicService'
import { AddTopicInput } from './AddTopicUseCase'
import { createAddTopic } from './createAddTopic'

describe('Use case - AddTopic', () => {
  it('should create a new topic based on service return', async () => {
    const topicAdded = new TopicData({
      id: '1',
      name: 'topic name',
      cards: [new CardData({ id: '1', front: 'card front 1', back: 'card back 1' })],
    })
    const service: AddTopicService = {
      addTopic: jest.fn(() => Promise.resolve(topicAdded)),
    }
    const token = 'token'
    const addTopicInput: AddTopicInput = {
      name: 'topic',
    }

    const addTopicUsecase = createAddTopic(service)
    const result = await addTopicUsecase(token, addTopicInput)

    expect(result?.id).toEqual(topicAdded.id)
    expect(result?.name).toEqual(topicAdded.name)
    expect(result?.cards[0].id).toEqual(topicAdded.cards[0].id)
    expect(result?.cards[0].front).toEqual(topicAdded.cards[0].front)
    expect(result?.cards[0].back).toEqual(topicAdded.cards[0].back)
  })
})
