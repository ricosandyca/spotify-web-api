import { useRecoilValue } from 'recoil'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { userData } from '../store/user'
import PlaylistCards from '../components/PlaylistCards'
import defaultAvatar from '../assets/img/default-avatar.jpg'

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.palette.background.default,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: theme.spacing(2)
  },
  secondaryText: {
    color: theme.palette.text.secondary,
    paddingTop: theme.spacing(2)
  }
}))

export default function DashboardPage() {
  const classes = useStyles()
  const user = useRecoilValue(userData)

  return (
    <div>
      <Paper variant='outlined' className={classes.paper}>
        <Box display='flex' flexDirection='row'>
          <Avatar src={user.images[0]?.url || defaultAvatar} className={classes.avatar} />
          <Box display='flex' flexDirection='column' justifyContent='center'>
            <Typography variant='h6'>{user.display_name}</Typography>
            <Typography variant='body2'>{user.email}</Typography>
            <Typography variant='caption' className={classes.secondaryText}>
              {user.followers.total} followers
              • {user.country} 
            </Typography>
          </Box>
        </Box>
      </Paper>
      <PlaylistCards />
    </div>
  )
}
