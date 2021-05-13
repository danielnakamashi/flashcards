import { ApolloClient, NormalizedCacheObject, gql, InMemoryCache } from '@apollo/client'
import {
  AddTopicServiceParam,
  AddCardServiceInput,
  Observable,
  CardData,
  TopicData,
  Observer,
} from '@flashcards/usecase'
import { Topic as TopicDB } from './entities/Topic'
import { RepositoryService } from '../RepositoryService'

class GraphqlService implements RepositoryService {
  private static readonly queryTopics = gql`
    query Topics {
      topics {
        id
        name
      }
    }
  `
  private static readonly queryTopic = gql`
    query Topic($topicId: String!) {
      topic(topicId: $topicId) {
        id
        name
        cards {
          id
          question
          answer
        }
      }
    }
  `
  private static readonly mutationAddTopic = gql`
    mutation AddTopic($name: String!) {
      addTopic(name: $name) {
        id
        name
      }
    }
  `
  private static readonly mutationRemoveTopic = gql`
    mutation RemoveTopic($topicId: String!) {
      removeTopic(topicId: $topicId)
    }
  `
  private static readonly mutationAddCard = gql`
    mutation AddCard($topicId: String!, $question: String!, $answer: String!) {
      addCard(topicId: $topicId, card: { question: $question, answer: $answer }) {
        id
        question
        answer
      }
    }
  `

  private readonly client: ApolloClient<NormalizedCacheObject>

  constructor(uri: string) {
    this.client = new ApolloClient({
      uri,
      cache: new InMemoryCache(),
      connectToDevTools: true,
    })
  }

  async getTopics(token: string): Promise<TopicData[]> {
    const { data } = await this.client.query<{ topics: TopicData[] }>({
      query: GraphqlService.queryTopics,
      context: {
        headers: {
          authentication: token,
        },
      },
      fetchPolicy: 'no-cache',
    })

    return data.topics.map(topicData => new TopicData(topicData))
  }

  getTopicsObserver(token: string): Observable<TopicData[]> {
    return new Observer((next, error) => {
      const observable = this.client.watchQuery<{ topics: TopicData[] }>({
        query: GraphqlService.queryTopics,
        context: {
          headers: {
            authentication: token,
          },
        },
      })
      observable.subscribe({
        next: ({ data }) => {
          next(data.topics.map(topicData => new TopicData(topicData)))
        },
        error,
      })
    })
  }

  async getTopic(token: string, topicId: string): Promise<TopicData> {
    const { data } = await this.client.query<{ topic: TopicDB }>({
      query: GraphqlService.queryTopic,
      variables: {
        topicId,
      },
      context: {
        headers: {
          authentication: token,
        },
      },
      fetchPolicy: 'no-cache',
    })

    return new TopicData({
      id: data.topic.id,
      name: data.topic.name,
      cards: data.topic.cards.map(
        ({ id, question, answer }) => new CardData({ id, front: question, back: answer }),
      ),
    })
  }

  async addTopic(token: string, inputData: AddTopicServiceParam): Promise<TopicData | null> {
    const context = {
      headers: {
        authentication: token,
      },
    }
    const { data } = await this.client.mutate<{ id: string; name: string }>({
      mutation: GraphqlService.mutationAddTopic,
      variables: {
        name: inputData.name,
      },
      context,
      refetchQueries: [
        {
          query: GraphqlService.queryTopics,
          context,
        },
      ],
    })

    return data ? new TopicData({ id: data.id, name: data.name }) : null
  }

  async removeTopic(token: string, topicId: string): Promise<boolean> {
    const context = {
      headers: {
        authentication: token,
      },
    }
    await this.client.mutate({
      mutation: GraphqlService.mutationRemoveTopic,
      variables: {
        topicId,
      },
      context,
      refetchQueries: [
        {
          query: GraphqlService.queryTopics,
          context,
        },
      ],
    })

    return true
  }

  async addCard(token: string, inputData: AddCardServiceInput): Promise<CardData> {
    const context = {
      headers: {
        authentication: token,
      },
    }
    const { data } = await this.client.mutate<{ id: string; question: string; answer: string }>({
      mutation: GraphqlService.mutationAddCard,
      variables: inputData,
      context,
      refetchQueries: [
        {
          query: GraphqlService.queryTopic,
          variables: {
            topicId: inputData.topicId,
          },
          context,
        },
      ],
    })

    if (data === null || data === undefined) {
      throw new Error('Error on mutation addCard')
    }

    return new CardData({ id: data.id, front: data.question, back: data.answer })
  }
}

export { GraphqlService }
