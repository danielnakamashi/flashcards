import { GetCurrentUserService } from './GetCurrentUserService'
import { GetCurrentUserUseCase } from './GetCurrentUserUseCase'

function createGetCurrentUser(service: GetCurrentUserService): GetCurrentUserUseCase {
  return function () {
    return service.getCurrentUser()
  }
}

export { createGetCurrentUser }
