import * as React from 'react'
import { useRouter } from 'next/router'
import { Pages, Routes } from 'models'
import { LoginProvidersData } from '@flashcards/usecase'
import { loginWithProvider } from '@/main'

function Login() {
  const router = useRouter()

  return (
    <main>
      <h1>Login</h1>
      {Object.keys(LoginProvidersData).map(provider => (
        <button
          key={provider}
          onClick={() => {
            loginWithProvider(provider as LoginProvidersData).then(() => {
              router.push(Routes.home())
            })
          }}
        >
          {provider}
        </button>
      ))}
    </main>
  )
}

Login.displayName = Pages.Login

export { Login }
