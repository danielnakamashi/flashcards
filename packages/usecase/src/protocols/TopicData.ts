import { ITopic } from '@flashcards/core'
import { CardData } from './CardData'

interface TopicDataConstructorParams {
  id: string
  name: string
  cards?: CardData[]
}

class TopicData implements ITopic {
  private _id: string
  private _name: string
  private _cards: CardData[]

  constructor({ id, name, cards = [] }: TopicDataConstructorParams) {
    this._id = id
    this._name = name
    this._cards = cards
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get cards() {
    return this._cards
  }
}

export { TopicData }
