import { CardRepo, TopicFullRepo, TopicRepo } from 'src/usecase/protocols'
import {
  AddCardRequest,
  AddTopicRequest,
  RemoveCardRequest,
  RemoveTopicRequest,
} from './protocols/mutation'
import { GetTopicRequest } from './protocols/query'

type ResolverContext = {
  uid: string
}

type Resolver = {
  Query: {
    topics: (source: unknown, args: unknown, context: ResolverContext) => Promise<TopicRepo[]>
    topic: (
      source: unknown,
      args: GetTopicRequest,
      context: ResolverContext,
    ) => Promise<TopicFullRepo | null>
  }
  Mutation: {
    addCard: (source: unknown, args: AddCardRequest, context: ResolverContext) => Promise<CardRepo>
    removeCard: (
      source: unknown,
      args: RemoveCardRequest,
      context: ResolverContext,
    ) => Promise<boolean>
    addTopic: (
      source: unknown,
      args: AddTopicRequest,
      context: ResolverContext,
    ) => Promise<TopicRepo>
    removeTopic: (
      source: unknown,
      args: RemoveTopicRequest,
      context: ResolverContext,
    ) => Promise<boolean>
  }
}

export type { Resolver, ResolverContext }
