import { UserData } from '../protocols'

type UserObserverInput = (user: UserData | null) => void

export type { UserObserverInput }
