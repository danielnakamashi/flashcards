import { TopicRepo } from '../protocols'

interface GetTopicsService {
  getTopics: (uid: string) => Promise<TopicRepo[]>
}

export type { GetTopicsService }
