import { UserData } from '../protocols'

interface GetCurrentUserService {
  getCurrentUser(): Promise<UserData | null>
}

export type { GetCurrentUserService }
