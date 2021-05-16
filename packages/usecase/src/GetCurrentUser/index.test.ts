import { UserData } from '../protocols'
import { createGetCurrentUser } from './createGetCurrentUser'
import { GetCurrentUserService } from './GetCurrentUserService'

describe('Use Case - GetCurrentUser', () => {
  it('should return current user from service', async () => {
    const userData = new UserData({
      name: 'name',
      email: 'email',
      photoUrl: 'photoUrl',
      emailVerified: true,
      uid: 'uid',
      token: 'token',
    })
    const service: GetCurrentUserService = {
      getCurrentUser: () => Promise.resolve(userData),
    }
    const getCurrentUser = createGetCurrentUser(service)
    const currentUser = await getCurrentUser()

    expect(currentUser?.name).toEqual(userData.name)
    expect(currentUser?.email).toEqual(userData.email)
    expect(currentUser?.photoUrl).toEqual(userData.photoUrl)
    expect(currentUser?.emailVerified).toEqual(userData.emailVerified)
    expect(currentUser?.uid).toEqual(userData.uid)
    expect(currentUser?.token).toEqual(userData.token)
  })
})
