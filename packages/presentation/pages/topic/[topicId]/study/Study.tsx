import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Pages } from '@/models'
import { withAuth } from '@/hocs/withAuth'
import { withRedirectToLogin } from '@/hocs/withRedirectToLogin'
import { useTopic } from '@/hooks/useTopic'
import { shuffleCards } from '@/main'
import { Header } from '@/components/Header'
import { StudyPile } from '@/components/StudyPile'
import { CardData } from '@flashcards/usecase'
import { useStyles } from './Study.style'

const Study = () => {
  const styles = useStyles()
  const router = useRouter()
  const { topicId } = router.query as { topicId: string }
  const topic = useTopic(topicId)
  const [cards, setCards] = useState<CardData[]>([])
  const shuffleHandler = async () => {
    const shuffledCards = await shuffleCards(cards)
    setCards(shuffledCards)
  }

  useEffect(() => {
    setCards(topic?.cards ?? [])
  }, [topic])

  if (!topic) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <Box pt={2}>
        <Container maxWidth="md" component="main" data-testid="topic-study-page">
          <Typography variant="h1" className={styles.title} align="center">
            {topic.name}
          </Typography>
          <StudyPile cards={cards} onShuffle={shuffleHandler} />
        </Container>
      </Box>
    </>
  )
}

Study.displayName = Pages.TopicStudy

const StudyDecorated = withAuth(withRedirectToLogin(Study))

export { StudyDecorated as default }
