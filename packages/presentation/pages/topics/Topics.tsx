import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Topic } from '@flashcards/core'
import { useAuth } from '@/contexts/auth'
import { Pages } from '@/models'
import { Header } from '@/components/Header'
import { NewTopicForm } from '@/components/NewTopicForm'
import { TopicsList } from '@/components/TopicsList'
import { getTopicsObserver, addTopic, removeTopic } from '@/main'
import { useStyles } from '@/styles/pages/topics/Topics.styles'
import { withAuth } from '@/hocs/withAuth'
import { withRedirectToLogin } from '@/hocs/withRedirectToLogin'

const Topics = () => {
  const { user, getToken } = useAuth()
  const styles = useStyles()
  const [topics, setTopics] = useState<Topic[]>([])
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    let isMounted = true
    ;(async () => {
      const token = await getToken()
      if (token && isMounted) {
        setToken(token)
      }
    })()

    return () => {
      isMounted = false
    }
  }, [user])

  useEffect(() => {
    let isMounted = true

    if (token) {
      const unsubscribe = getTopicsObserver(token).subscribe(topics => {
        if (isMounted) {
          setTopics(topics ?? [])
        }
      })

      return () => {
        isMounted = false
        unsubscribe()
      }
    }

    return () => {
      isMounted = false
    }
  }, [token])

  return (
    <>
      <Header />
      <Grid container direction="column" className={styles.container}>
        <Grid item>
          <NewTopicForm
            onTopicSubmitted={async ({ name }) => {
              addTopic(token, { name })
            }}
          />
        </Grid>
        <Grid item>
          <TopicsList
            items={topics}
            onItemRemoved={async (topicId: string) => {
              removeTopic(token, topicId)
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

Topics.displayName = Pages.Home

const TopicsDecorated = withAuth(withRedirectToLogin(Topics))

export { TopicsDecorated as default }
