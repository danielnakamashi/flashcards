import { useState, useEffect } from 'react'
import { CardData, TopicData } from '@flashcards/usecase'
import { useToken } from '@/hooks/useToken'
import { getTopic } from '@/main'

function useTopic(topicId: string): TopicData | undefined {
  const token = useToken()
  const [topic, setTopic] = useState<TopicData | undefined>()

  useEffect(() => {
    let isMounted = true

    if (token) {
      getTopic(token, topicId).then(data => {
        if (isMounted) {
          setTopic(
            new TopicData({
              id: data.id,
              name: data.name,
              cards: data.cards.map(card => new CardData(card)),
            }),
          )
        }
      })
    }

    return () => {
      isMounted = false
    }
  }, [token])

  return topic
}

export { useTopic }
