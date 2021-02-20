import { UserData } from '../protocols'
import { LoginProvidersData } from '../protocols/LoginProvidersData'

interface LoginWithProviderService {
  loginWithProvider(provider: LoginProvidersData): Promise<UserData | null>
}

export type { LoginWithProviderService }
