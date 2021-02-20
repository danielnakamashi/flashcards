import { UseCases } from '../../usecase/protocols'
import { Resolver } from './Resolver'

const createResolver = (useCases: UseCases): Resolver => {
  const resolver: Resolver = {
    Query: {
      topics: async (_, __, { uid }) => {
        return useCases.getTopics({ uid })
      },
      topic: async (_, args, { uid }) => {
        return useCases.getTopic({ uid, topicId: args.topicId })
      },
    },
    Mutation: {
      addCard: async (_, args, { uid }) => {
        return useCases.addCard({ uid, topicId: args.topicId, card: args.card })
      },
      removeCard: async (_, args, { uid }) => {
        return useCases.removeCard({
          uid,
          topicId: args.topicId,
          cardId: args.cardId,
        })
      },
      addTopic: async (_, args, { uid }) => {
        return useCases.addTopic({ uid, topic: args })
      },
      removeTopic: async (_, args, { uid }) => {
        return useCases.removeTopic({ uid, topicId: args.topicId })
      },
    },
  }

  return resolver
}

export { createResolver }
