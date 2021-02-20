import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from '@/components/Link'
import { useAuth } from '@/contexts/auth'
import { Routes } from '@/models'
import { useStyles } from './Header.style'

function Header() {
  const { user } = useAuth()
  const styles = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Link underline="none" href={Routes.home()} className={styles.title}>
          Flashcards
        </Link>
        <Box flexGrow={1} />
        {user && (
          <Box display="flex" alignItems="center">
            <IconButton>
              <Avatar src={user.photoUrl || undefined} alt={user.name} />
            </IconButton>
            <Typography className={styles.userName}>{user.name}</Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export { Header }
