import {
  AddCardService,
  AddTopicService,
  GetTopicService,
  GetTopicsService,
  GetTopicsObserverService,
  RemoveTopicService,
} from '@flashcards/usecase'

type RepositoryService = GetTopicsService &
  GetTopicsObserverService &
  GetTopicService &
  AddTopicService &
  RemoveTopicService &
  AddCardService

export type { RepositoryService }
