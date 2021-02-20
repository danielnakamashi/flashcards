import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth'
import { Routes } from '@/models'

const withRedirectToLogin = (Component: React.ElementType): React.ElementType => {
  return (props: Record<string, unknown>): React.ReactElement => {
    const { user, loading } = useAuth()
    const router = useRouter()

    if (loading) {
      return <div>Loading...</div>
    }

    if (!user) {
      router.push(Routes.login())
      return null
    }

    return <Component {...props} />
  }
}

export { withRedirectToLogin }
