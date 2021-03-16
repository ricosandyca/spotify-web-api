import { useRecoilValue } from 'recoil'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { playlistState } from '../store/playlist'
import defaultPlaylistImage from '../assets/img/default-playlist-image.jpg'

const useStyles = makeStyles(theme => ({
  image: {
    width: '225px',
    height: '225px',
    objectFit: 'cover'
  }
}))

export default function PlaylistCards() {
  const classes = useStyles()
  const { items: playlists } = useRecoilValue(playlistState)

  return (
    <Grid container spacing={4}>
      {playlists.map(({ id, ...playlist }) => (
        <Grid key={id} item xs={3}>
          <img src={playlist.images[0]?.url ||defaultPlaylistImage } className={classes.image} alt={playlist.name} />
        </Grid>
      ))}
    </Grid>
  )
}
