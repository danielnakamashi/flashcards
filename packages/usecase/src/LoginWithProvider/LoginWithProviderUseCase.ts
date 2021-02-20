import { User } from '@flashcards/core'
import { LoginProvidersData } from '../protocols'

type LoginWithProviderUseCase = (
  provider: LoginProvidersData,
) => Promise<User | null>

export type { LoginWithProviderUseCase }
