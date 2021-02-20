interface RemoveTopicService {
  removeTopic: (token: string, topicId: string) => Promise<boolean>
}

export type { RemoveTopicService }
