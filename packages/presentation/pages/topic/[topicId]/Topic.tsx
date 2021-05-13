import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withAuth } from '@/hocs/withAuth'
import { withRedirectToLogin } from '@/hocs/withRedirectToLogin'
import { Pages } from '@/models'
import { Header } from '@/components/Header'
import { useToken } from '@/hooks/useToken'
import { addCard } from '@/main'
import { Flashcard } from '@/components/Flashcard'
import { NewCardForm } from '@/components/NewCardForm'
import { useTopic } from '@/hooks/useTopic'
import { useStyles } from '@/styles/pages/topic/[topicId]/Topic.style'

const Topic = () => {
  const router = useRouter()
  const styles = useStyles()
  const token = useToken()
  const { topicId } = router.query as { topicId: string }

  const topic = useTopic(topicId)

  console.log(token)

  if (!topic) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <main data-testid="topic-page">
        <Grid container direction="column" spacing={2} className={styles.list}>
          <Grid item>
            <Typography variant="h1" className={styles.title}>
              {topic.name}
            </Typography>
          </Grid>
          <Grid item>
            <NewCardForm
              onAdd={async (question, answer) => {
                await addCard(token, { topicId, question, answer })
              }}
            />
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={2}>
              {topic.cards.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={3}>
                  <Flashcard front={card.front} containerClassName={styles.flashCard}>
                    {card.back}
                  </Flashcard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

Topic.displayName = Pages.Topic

const TopicDecorated = withAuth(withRedirectToLogin(Topic))

export { TopicDecorated as default }
