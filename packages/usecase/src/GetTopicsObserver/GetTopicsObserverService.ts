import { TopicData, Observable } from '../protocols'

interface GetTopicsObserverService {
  getTopicsObserver: (token: string) => Observable<TopicData[]>
}

export type { GetTopicsObserverService }
