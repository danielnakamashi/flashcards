import { Card } from '@flashcards/core'
import { AddCardService } from './AddCardService'
import { AddCardInput, AddCardUseCase } from './AddCardUseCase'

function createAddCard(service: AddCardService): AddCardUseCase {
  return async function (token: string, input: AddCardInput): Promise<Card> {
    const cardData = await service.addCard(token, input)
    return new Card(cardData)
  }
}

export { createAddCard }
