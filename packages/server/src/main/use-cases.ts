import { FirebaseService } from '../service/firebase/service'
import * as useCases from '../usecase'
import serviceAccount from './service-account'

const service = new FirebaseService(
  serviceAccount.client_email,
  serviceAccount.private_key,
  serviceAccount.project_id,
)

const addCard = useCases.createAddCard(service)
const addTopic = useCases.createAddTopic(service)
const getTopic = useCases.createGetTopic(service)
const getTopics = useCases.createGetTopics(service)
const removeCard = useCases.createRemoveCard(service)
const removeTopic = useCases.createRemoveTopic(service)

export { addCard, addTopic, getTopic, getTopics, removeCard, removeTopic }
