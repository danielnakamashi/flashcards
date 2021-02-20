import * as React from 'react'
import type { UserData } from '@flashcards/usecase'
import { getUserToken, userObserver } from '@/main'

type State = {
  user: UserData | null
  loading: boolean
  getToken: () => Promise<string | null>
}

type Action = { type: 'loaded'; payload: UserData | null }

const initialState = {
  user: null,
  loading: true,
  getToken: () => {
    return getUserToken()
  },
}
const AuthContext = React.createContext<State>(initialState)

const reducer = (state: State, action: Action): State => {
  if (action.type === 'loaded') {
    return {
      ...state,
      loading: false,
      user: action.payload,
    }
  }

  return state
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    let isMounted = true

    userObserver(user => {
      if (isMounted) {
        dispatch({ type: 'loaded', payload: user })
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  return React.useContext(AuthContext)
}

export { AuthProvider, useAuth }
