import { AuthProvider } from '@/contexts/auth'

const withAuth = (Component: React.ElementType) => {
  return (props: Record<string, unknown>) => (
    <AuthProvider>
      <Component {...props} />
    </AuthProvider>
  )
}

export { withAuth }
