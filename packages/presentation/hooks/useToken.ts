import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/auth'

function useToken() {
  const [token, setToken] = useState('')
  const { user, getToken } = useAuth()

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      const token = await getToken()
      if (token && isMounted) {
        setToken(token)
      }
    })()

    return () => {
      isMounted = false
    }
  }, [user])

  return token
}

export { useToken }
