import { CardData } from '../protocols'

interface ShuffleCardsUseCase {
  (cards: CardData[]): Promise<CardData[]>
}

export type { ShuffleCardsUseCase }
