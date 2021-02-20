import admin from 'firebase-admin'
import { Request, Response } from 'express'

const firebaseAuthentication = (
  tokenDecoder: (token: string) => Promise<admin.auth.DecodedIdToken>,
) => (req: Request, res: Response, next: () => void) => {
  const token = req.header('authentication') ?? ''

  if (!token) {
    next()
  }

  tokenDecoder(token).then(
    decodedToken => {
      req.uid = decodedToken.uid
      next()
    },
    () => {
      next()
    },
  )
}

export { firebaseAuthentication }
