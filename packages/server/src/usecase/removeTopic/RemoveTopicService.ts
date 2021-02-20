interface RemoveTopicService {
  removeTopic: (uid: string, topicId: string) => Promise<boolean>
}

export type { RemoveTopicService }
