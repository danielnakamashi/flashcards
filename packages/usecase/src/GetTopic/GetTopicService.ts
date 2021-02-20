import { TopicData } from '../protocols'

interface GetTopicService {
  getTopic: (token: string, topicId: string) => Promise<TopicData>
}

export type { GetTopicService }
