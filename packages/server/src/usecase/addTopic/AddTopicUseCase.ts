import { AddTopicInput } from './AddTopicInput'
import { AddTopicOutput } from './AddTopicOutput'

interface AddTopicUseCase {
  (input: AddTopicInput): AddTopicOutput
}

export type { AddTopicUseCase }
