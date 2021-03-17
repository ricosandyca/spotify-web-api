import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import defaultPlaylistImage from '../assets/img/default-playlist-image.jpg'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: theme.spacing(1),
    background: theme.palette.background.default,
    padding: theme.spacing(2)
  },
  image: {
    width: '300px'
  }
}))

export default function PlaylistDetail({ playlist }) {
  const classes = useStyles()

  return (
    <Paper variant='outlined' className={classes.paper}>
      <img
        src={(playlist.images || [])[0]?.url || defaultPlaylistImage}
        className={classes.image}
        alt={playlist.name} />
    </Paper>
  )
}
