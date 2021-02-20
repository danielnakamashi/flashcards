import { RemoveTopicInput } from './RemoveTopicInput'
import { RemoveTopicOutput } from './RemoveTopicOutput'

interface RemoveTopicUseCase {
  (input: RemoveTopicInput): RemoveTopicOutput
}

export type { RemoveTopicUseCase }
