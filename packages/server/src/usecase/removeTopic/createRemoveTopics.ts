import { RemoveTopicInput } from './RemoveTopicInput'
import { RemoveTopicOutput } from './RemoveTopicOutput'
import { RemoveTopicService } from './RemoveTopicService'
import { RemoveTopicUseCase } from './RemoveTopicUseCase'

function createRemoveTopic(service: RemoveTopicService): RemoveTopicUseCase {
  return async function ({ uid, topicId }: RemoveTopicInput): RemoveTopicOutput {
    return service.removeTopic(uid, topicId)
  }
}

export { createRemoveTopic }
