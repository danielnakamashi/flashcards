import { Express } from 'express'
import * as useCases from './use-cases'
import { configGraphqlServer } from '../presenter/graphql'
import { firebaseAuthentication } from '../service/firebase'
import { tokenDecoder } from './tokenDecoder'

const configServer = (app: Express) => {
  const graphqlPath = '/graphql'
  configGraphqlServer(app, graphqlPath, useCases, firebaseAuthentication(tokenDecoder))

  return { apiPath: graphqlPath }
}

export { configServer }
