import { GetTopicsInput, GetTopicsOutput } from '.'

interface GetTopicsUseCase {
  (input: GetTopicsInput): GetTopicsOutput
}

export type { GetTopicsUseCase }
