import { gql } from 'apollo-server-express'

const schema = gql`
  type Card {
    id: ID!
    question: String!
    answer: String!
  }

  type Topic {
    id: ID!
    name: String!
    cards: [Card!]!
  }

  type Query {
    topics: [Topic!]!
    topic(topicId: String!): Topic
  }

  input CardInput {
    question: String!
    answer: String!
  }

  type Mutation {
    addCard(topicId: String!, card: CardInput!): Card
    addTopic(name: String!): Topic
    removeCard(topicId: String!, cardId: String!): Boolean
    removeTopic(topicId: String!): Boolean
  }
`

export { schema }
