import { AddTopicInput } from './AddTopicInput'
import { AddTopicOutput } from './AddTopicOutput'
import { AddTopicService } from './AddTopicService'
import { AddTopicUseCase } from './AddTopicUseCase'

function createAddTopic(service: AddTopicService): AddTopicUseCase {
  return async function ({ uid, topic }: AddTopicInput): AddTopicOutput {
    return service.addTopic(uid, topic)
  }
}

export { createAddTopic }
