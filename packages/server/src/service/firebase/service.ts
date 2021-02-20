import admin from 'firebase-admin'
import { Topic } from '@flashcards/core'
import { AddTopicService } from '../../usecase/addTopic'
import { CardRepo, TopicFullRepo, TopicRepo } from '../../usecase/protocols'
import { AddCardService } from '../../usecase/addCard'
import { GetTopicService } from '../../usecase/getTopic'
import { GetTopicsService } from '../../usecase/getTopics'
import { RemoveCardService } from '../../usecase/removeCard'
import { RemoveTopicService } from '../../usecase/removeTopic'

enum Collection {
  Users = 'users',
  Topics = 'topics',
  Cards = 'cards',
}

class FirebaseService
  implements
    AddCardService,
    AddTopicService,
    GetTopicService,
    GetTopicsService,
    RemoveCardService,
    RemoveTopicService {
  private readonly admin: admin.app.App

  constructor(clientEmail?: string, privateKey?: string, projectId?: string, databaseURL?: string) {
    this.admin = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail,
        privateKey,
        projectId,
      }),
      databaseURL,
    })
  }

  async addCard(
    uid: string,
    topicId: string,
    card: { question: string; answer: string },
  ): Promise<CardRepo> {
    const docRef = await this.admin
      .firestore()
      .collection(Collection.Users)
      .doc(uid)
      .collection(Collection.Topics)
      .doc(topicId)
      .collection(Collection.Cards)
      .add(card)

    return {
      id: docRef.id,
      ...card,
    }
  }

  async addTopic(uid: string, topic: { name: string }): Promise<Pick<Topic, 'id' | 'name'>> {
    const docRef = await this.admin
      .firestore()
      .collection(Collection.Users)
      .doc(uid)
      .collection(Collection.Topics)
      .add(topic)

    return {
      id: docRef.id,
      name: topic.name,
    }
  }

  async getTopic(uid: string, topicId: string): Promise<TopicFullRepo | null> {
    const docRef = this.admin
      .firestore()
      .collection(Collection.Users)
      .doc(uid)
      .collection(Collection.Topics)
      .doc(topicId)
    const querySnapshot = await docRef.get()
    const data = querySnapshot.data() as TopicRepo

    if (!data) {
      return null
    }

    const cardsQuerySnapshot = await docRef.collection(Collection.Cards).get()
    const cards: CardRepo[] = []
    cardsQuerySnapshot.forEach(docSnapshot => {
      const { id } = docSnapshot
      const cardData = docSnapshot.data() as CardRepo

      cards.push({ ...cardData, id })
    })

    return {
      ...data,
      id: topicId,
      cards,
    }
  }

  async getTopics(uid: string): Promise<Pick<Topic, 'id' | 'name'>[]> {
    const topics: TopicRepo[] = []
    const querySnapshot = await this.admin
      .firestore()
      .collection(Collection.Users)
      .doc(uid)
      .collection(Collection.Topics)
      .get()

    querySnapshot.forEach(doc => {
      const data = doc.data()

      topics.push({
        id: doc.id,
        name: data.name,
      })
    })

    return topics
  }

  async removeCard(uid: string, topicId: string, cardId: string): Promise<boolean> {
    await this.admin
      .firestore()
      .collection(Collection.Users)
      .doc(uid)
      .collection(Collection.Topics)
      .doc(topicId)
      .collection(Collection.Cards)
      .doc(cardId)
      .delete()

    return true
  }

  async removeTopic(uid: string, topicId: string): Promise<boolean> {
    await this.admin
      .firestore()
      .collection(Collection.Users)
      .doc(uid)
      .collection(Collection.Topics)
      .doc(topicId)
      .delete()

    return true
  }
}

export { FirebaseService }
