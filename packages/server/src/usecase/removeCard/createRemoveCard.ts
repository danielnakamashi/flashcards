import { RemoveCardInput } from './RemoveCardInput'
import { RemoveCardOutput } from './RemoveCardOutput'
import { RemoveCardService } from './RemoveCardService'
import { RemoveCardUseCase } from './RemoveCardUseCase'

function createRemoveCard(service: RemoveCardService): RemoveCardUseCase {
  return async function ({ uid, topicId, cardId }: RemoveCardInput): RemoveCardOutput {
    return service.removeCard(uid, topicId, cardId)
  }
}

export { createRemoveCard }
