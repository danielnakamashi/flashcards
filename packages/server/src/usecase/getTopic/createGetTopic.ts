import { GetTopicInput } from './GetTopicInput'
import { GetTopicOutput } from './GetTopicOutput'
import { GetTopicService } from './GetTopicService'
import { GetTopicUseCase } from './GetTopicUseCase'

function createGetTopic(service: GetTopicService): GetTopicUseCase {
  return async function ({ uid, topicId }: GetTopicInput): GetTopicOutput {
    return service.getTopic(uid, topicId)
  }
}

export { createGetTopic }
