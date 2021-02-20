import {
  GetCurrentUserService,
  GetUserTokenService,
  LoginWithProviderService,
  UserObserverService,
} from '@flashcards/usecase'

type AuthService = UserObserverService &
  GetCurrentUserService &
  GetUserTokenService &
  LoginWithProviderService

export type { AuthService }
