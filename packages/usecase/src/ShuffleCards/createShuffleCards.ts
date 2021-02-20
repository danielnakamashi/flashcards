import { shuffleCards } from '@flashcards/core'
import { CardData } from '../protocols'
import { ShuffleCardsUseCase } from './ShuffleCardsUseCase'

function createShuffleCards(): ShuffleCardsUseCase {
  return async function (cards: CardData[]) {
    return Promise.resolve(shuffleCards(cards))
  }
}

export { createShuffleCards }
