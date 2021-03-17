import { useRecoilValue } from 'recoil'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import defaultPlaylistImage from '../assets/img/default-playlist-image.jpg'
import { userData } from '../store/user'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: theme.spacing(1),
    background: theme.palette.background.default,
    padding: theme.spacing(2)
  },
  image: {
    width: '100%'
  },
  gridContent: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      marginLeft: theme.spacing(2),
      paddingBottom: theme.spacing(.75)
    }
  },
  owner: {
    color: theme.palette.secondary.main
  }
}))

export default function PlaylistDetail({ playlist }) {
  const classes = useStyles()
  const user = useRecoilValue(userData)
  const isOwner = playlist.owner.id === user.id

  return (
    <Paper variant='outlined' className={classes.paper}>
      <Grid container alignItems='flex-end' style={{ padding: '8px' }}>
        <Grid item xs={12} md={3} lg={2}>
          <img
            src={(playlist.images || [])[0]?.url || defaultPlaylistImage}
            className={classes.image}
            alt={playlist.name}
          />
        </Grid>
        <Grid item className={classes.gridContent}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h4'><b>{playlist.name}</b></Typography>
            <Typography variant='caption'>
              • {playlist.tracks.total} tracks
            </Typography>
            <Typography variant='caption'>
              • Owner: <span className={isOwner && classes.owner}>
                {isOwner ? 'You' : playlist.owner.display_name}
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
