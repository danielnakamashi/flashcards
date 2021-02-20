import { TopicFullRepo } from '../protocols'

interface GetTopicService {
  getTopic: (uid: string, topicId: string) => Promise<TopicFullRepo | null>
}

export type { GetTopicService }
