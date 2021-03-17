import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import TruncatedText from './TruncatedText'
import { playlistState } from '../store/playlist'
import defaultPlaylistImage from '../assets/img/default-playlist-image.jpg'

const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing(1)
  },
  image: {
    transition: '.3s',
    width: '100%',
    aspectRatio: '1/1',
    objectFit: 'cover'
  },
  content: {
    marginTop: theme.spacing(1),
    textAlign: 'left'
  }
}))

export default function PlaylistCards() {
  const classes = useStyles()
  const history = useHistory()
  const { items: playlists } = useRecoilValue(playlistState)

  return (
    <Grid container spacing={5}>
      {playlists.map(({ id, ...playlist }) => (
        <Grid key={id} item xs={6} md={4} lg={3}>
          <ButtonBase
            className={classes.card}
            onClick={() => history.push(`/dashboard/playlist/${id}`)}
          >
            <img
              src={(playlist.images || [])[0]?.url || defaultPlaylistImage}
              className={classes.image}
              alt={playlist.name}
            />
            <Box className={classes.content}>
              <Typography variant='body1'>
                <TruncatedText maxLine={1}>{playlist.name}</TruncatedText>
              </Typography>
              <Typography variant='caption'>
                • {playlist.tracks.total} tracks
              </Typography>
            </Box>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  )
}
