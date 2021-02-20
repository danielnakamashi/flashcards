interface RemoveTopicUseCase {
  (token: string, topicId: string): Promise<boolean>
}

export type { RemoveTopicUseCase }
