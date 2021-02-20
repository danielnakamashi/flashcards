type UserConstructorParams = {
  name: string
  email: string
  photoUrl: string
  emailVerified: boolean
  uid: string
  token?: string
}

class User {
  name: string
  email: string
  photoUrl: string
  emailVerified: boolean
  uid: string
  token?: string

  constructor({ name, email, photoUrl, emailVerified, uid, token }: UserConstructorParams) {
    this.name = name
    this.email = email
    this.photoUrl = photoUrl
    this.emailVerified = emailVerified
    this.uid = uid
    this.token = token
  }
}

export { User }
