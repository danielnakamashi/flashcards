import { GraphqlService, FirebaseService } from '@flashcards/service'
import {
  createAddCard,
  createAddTopic,
  createGetTopics,
  createGetCurrentUser,
  createGetTopic,
  createGetTopicsObserver,
  createGetUserToken,
  createLoginWithProvider,
  createRemoveTopic,
  createShuffleCards,
  createUserObserver,
} from '@flashcards/usecase'
import firebaseConfig from './firebaseConfig'

const graphqlService = new GraphqlService('http://localhost:4000/graphql')
const firebaseService = new FirebaseService(firebaseConfig)

const addCard = createAddCard(graphqlService)
const addTopic = createAddTopic(graphqlService)
const getCurrentUser = createGetCurrentUser(firebaseService)
const getTopic = createGetTopic(graphqlService)
const getTopics = createGetTopics(graphqlService)
const getTopicsObserver = createGetTopicsObserver(graphqlService)
const getUserToken = createGetUserToken(firebaseService)
const loginWithProvider = createLoginWithProvider(firebaseService)
const removeTopic = createRemoveTopic(graphqlService)
const shuffleCards = createShuffleCards()
const userObserver = createUserObserver(firebaseService)

export {
  addCard,
  addTopic,
  getCurrentUser,
  getTopic,
  getTopics,
  getTopicsObserver,
  getUserToken,
  loginWithProvider,
  removeTopic,
  shuffleCards,
  userObserver,
}
