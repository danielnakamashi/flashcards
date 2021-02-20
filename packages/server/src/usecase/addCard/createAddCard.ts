import { AddCardInput } from './AddCardInput'
import { AddCardOutput } from './AddCardOutput'
import { AddCardService } from './AddCardService'
import { AddCardUseCase } from './AddCardUseCase'

function createAddCard(service: AddCardService): AddCardUseCase {
  return async function ({ uid, topicId, card }: AddCardInput): AddCardOutput {
    return service.addCard(uid, topicId, card)
  }
}

export { createAddCard }
