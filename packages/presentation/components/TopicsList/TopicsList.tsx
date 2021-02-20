import React from 'react'
import { Topic } from '@flashcards/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ClassIcon from '@material-ui/icons/Class'
import { useRouter } from 'next/router'
import { Routes } from '@/models/Routes'

type TopicsListProps = {
  items: Topic[]
  onItemRemoved: (id: string) => void
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  const router = useRouter()

  return (
    <List data-testid="topics-list">
      {items
        .filter(item => item.id)
        .map(item => (
          <ListItem
            button
            key={item.id}
            data-testid="topicsListItem"
            onClick={() => router.push(Routes.topic(item.id))}
          >
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
              <IconButton title="study" onClick={() => router.push(Routes.topicStudy(item.id))}>
                <ClassIcon />
              </IconButton>
              <IconButton title="remove" onClick={() => onItemRemoved(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  )
}

export { TopicsList }
