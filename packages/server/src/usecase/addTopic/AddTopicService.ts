import { TopicRepo } from '../protocols'

interface AddTopicService {
  addTopic: (uid: string, topic: { name: string }) => Promise<TopicRepo>
}

export type { AddTopicService }
