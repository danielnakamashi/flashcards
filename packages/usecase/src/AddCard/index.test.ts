import { AddCardService, AddCardServiceInput } from './AddCardService'
import { CardData } from '../protocols'
import { createAddCard } from './createAddCard'

describe('Use case - AddCard', () => {
  it('should create a new card based on service return', async () => {
    const cardAdded = new CardData({ id: '1', front: 'front', back: 'back' })
    const service: AddCardService = {
      addCard: jest.fn(() => Promise.resolve(cardAdded)),
    }
    const token = 'token'
    const addCardInput: AddCardServiceInput = {
      topicId: '1',
      question: 'question',
      answer: 'answer',
    }

    const addCardUseCase = createAddCard(service)
    const result = await addCardUseCase(token, addCardInput)

    expect(service.addCard).toBeCalledWith(token, addCardInput)
    expect(result.id).toEqual(cardAdded.id)
    expect(result.front).toEqual(cardAdded.front)
    expect(result.back).toEqual(cardAdded.back)
  })
})
