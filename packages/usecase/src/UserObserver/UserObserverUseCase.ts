import { UserObserverInput } from './UserObserverInput'

interface UserObserverUseCase {
  (callback: UserObserverInput): void
}

export type { UserObserverUseCase }
