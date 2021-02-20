import { ICard } from '@flashcards/core'

interface CardDataConstructorParams {
  id: string
  front: string
  back: string
}

class CardData implements ICard {
  private _id: string
  private _front: string
  private _back: string

  constructor({ id, front, back }: CardDataConstructorParams) {
    this._id = id
    this._front = front
    this._back = back
  }

  get id() {
    return this._id
  }

  get front() {
    return this._front
  }

  get back() {
    return this._back
  }
}

export { CardData }
