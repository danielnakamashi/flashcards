import { Express, RequestHandler } from 'express'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import { schema } from './schema'
import { createResolver } from './createResolver'
import { UseCases } from '../../usecase/protocols'

const configGraphqlServer = (
  app: Express,
  path: string,
  useCases: UseCases,
  authenticationMiddleware: RequestHandler,
) => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: createResolver(useCases),
    context: ({ req: { uid } }) => {
      if (!uid) {
        throw new AuthenticationError('Invalid token')
      }

      return { uid }
    },
  })
  app.post(path, authenticationMiddleware)
  server.applyMiddleware({ app, path: path })
}

export { configGraphqlServer }
