import { TopicData } from '../protocols'

interface GetTopicsService {
  getTopics: (token: string) => Promise<TopicData[]>
}

export type { GetTopicsService }
