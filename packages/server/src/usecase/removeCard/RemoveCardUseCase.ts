import { RemoveCardInput, RemoveCardOutput } from '.'

interface RemoveCardUseCase {
  (input: RemoveCardInput): RemoveCardOutput
}

export type { RemoveCardUseCase }
