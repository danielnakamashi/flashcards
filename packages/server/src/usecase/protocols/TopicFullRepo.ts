import { CardRepo } from './CardRepo'
import { TopicRepo } from './TopicRepo'

type TopicFullRepo = TopicRepo & {
  cards: CardRepo[]
}

export type { TopicFullRepo }
