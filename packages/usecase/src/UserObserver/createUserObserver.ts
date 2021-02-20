import { UserObserverInput } from './UserObserverInput'
import { UserObserverService } from './UserObserverService'
import { UserObserverUseCase } from './UserObserverUseCase'

function createUserObserver(service: UserObserverService): UserObserverUseCase {
  return function (callback: UserObserverInput): void {
    return service.userObserver(callback)
  }
}

export { createUserObserver }
