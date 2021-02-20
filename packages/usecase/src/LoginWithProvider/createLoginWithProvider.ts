import { LoginWithProviderService } from './LoginWithProviderService'
import { LoginWithProviderUseCase } from './LoginWithProviderUseCase'
import { LoginProvidersData } from '../protocols'

function createLoginWithProvider(service: LoginWithProviderService): LoginWithProviderUseCase {
  return function (provider: LoginProvidersData) {
    return service.loginWithProvider(provider)
  }
}

export { createLoginWithProvider }
