import { Topic } from '@flashcards/core'

type TopicRepo = Omit<Topic, 'cards'>

export type { TopicRepo }
