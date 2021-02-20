import { GetTopicsInput } from './GetTopicsInput'
import { GetTopicsOutput } from './GetTopicsOutput'
import { GetTopicsService } from './GetTopicsService'
import { GetTopicsUseCase } from './GetTopicsUseCase'

function createGetTopics(service: GetTopicsService): GetTopicsUseCase {
  return async function ({ uid }: GetTopicsInput): GetTopicsOutput {
    return service.getTopics(uid)
  }
}

export { createGetTopics }
