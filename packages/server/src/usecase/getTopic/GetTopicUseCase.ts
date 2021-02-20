import { GetTopicInput, GetTopicOutput } from '.'

interface GetTopicUseCase {
  (input: GetTopicInput): GetTopicOutput
}

export type { GetTopicUseCase }
