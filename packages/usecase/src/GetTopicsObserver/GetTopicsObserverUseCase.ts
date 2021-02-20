import { Topic } from '@flashcards/core'
import { Observable } from '../protocols'

interface GetTopicsObserverUseCase {
  (token: string): Observable<Topic[]>
}

export type { GetTopicsObserverUseCase }
