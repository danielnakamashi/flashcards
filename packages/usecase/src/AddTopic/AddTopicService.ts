import { TopicData } from '../protocols'

interface AddTopicServiceParam {
  name: string
}
interface AddTopicService {
  addTopic: (token: string, data: AddTopicServiceParam) => Promise<TopicData | null>
}

export type { AddTopicService, AddTopicServiceParam }
