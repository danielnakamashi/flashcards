import { Card, Topic } from '@flashcards/core'
import { Observer } from '../Observer'
import { Observable } from '../protocols'
import { GetTopicsObserverService } from './GetTopicsObserverService'
import { GetTopicsObserverUseCase } from './GetTopicsObserverUseCase'

function createGetTopicsObserver(service: GetTopicsObserverService): GetTopicsObserverUseCase {
  return function (token: string): Observable<Topic[]> {
    return new Observer<Topic[]>(next => {
      const observer = service.getTopicsObserver(token)
      observer.subscribe(topicsData => {
        console.log(topicsData)
        next(
          topicsData.map(
            topicData =>
              new Topic({
                id: topicData.id,
                name: topicData.name,
                cards: topicData.cards.map(card => new Card(card)),
              }),
          ),
        )
      })
    })
  }
}

export { createGetTopicsObserver }
