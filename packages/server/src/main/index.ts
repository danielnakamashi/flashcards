import { Express } from 'express'
import * as useCases from './use-cases'
import { configGraphqlServer } from '../presenter/graphql'
import { firebaseAuthentication } from '../service/firebase'
import { tokenDecoder } from './tokenDecoder'

const configServer = (app: Express, path: string) => {
  configGraphqlServer(app, path, useCases, firebaseAuthentication(tokenDecoder))
}

export { configServer }
