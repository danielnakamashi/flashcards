import { Card } from './Card'

type TopicConstructorParams = {
  id: string
  name: string
  cards?: Card[]
}

class Topic {
  private _id: string
  private _name: string
  private _cards: Card[]

  constructor({ id, name, cards = [] }: TopicConstructorParams) {
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

export { Topic }
