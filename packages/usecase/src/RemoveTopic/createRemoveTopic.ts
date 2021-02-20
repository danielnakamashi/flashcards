import { RemoveTopicService } from './RemoveTopicService'
import { RemoveTopicUseCase } from './RemoveTopicUseCase'

function createRemoveTopic(service: RemoveTopicService): RemoveTopicUseCase {
  return async function (token: string, topicId: string): Promise<boolean> {
    return service.removeTopic(token, topicId)
  }
}

export { createRemoveTopic }
