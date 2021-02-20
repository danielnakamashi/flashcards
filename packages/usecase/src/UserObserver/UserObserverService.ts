import { UserData } from '../protocols'

interface UserObserverService {
  userObserver(callback: (user: UserData | null) => void): void
}

export type { UserObserverService }
