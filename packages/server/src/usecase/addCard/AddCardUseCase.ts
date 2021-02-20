import { AddCardInput, AddCardOutput } from '.'

interface AddCardUseCase {
  (input: AddCardInput): AddCardOutput
}

export type { AddCardUseCase }
