import { GetUserTokenService } from './GetUserTokenService'
import { GetUserTokenUseCase } from './GetUserTokenUseCase'

function createGetUserToken(service: GetUserTokenService): GetUserTokenUseCase {
  return async function (): Promise<string> {
    return service.getUserToken()
  }
}

export { createGetUserToken }
