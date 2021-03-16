import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { playlistState } from '../store/playlist'

const useStyles = makeStyles(theme => ({
  subheader: {
    background: theme.palette.background.default
  }
}))

export default function Playlist() {
  const classes = useStyles()
  const { items: playlists } = useRecoilValue(playlistState)

  return (
    <List subheader={
      <ListSubheader className={classes.subheader}>
        Playlists
      </ListSubheader>
    }>
      {playlists.map(({ id, ...playlist }) => (
        <ListItem key={id} button component={Link} to={`/dashboard/playlist/${id}`}>
          <ListItemIcon>
            {playlist.images[0]?.url ? (
              <Avatar src={playlist.images[0].url} />
            ) : (
              <PlaylistPlayIcon />
            )}
          </ListItemIcon>
          <ListItemText primary={playlist.name} />
        </ListItem>
      ))}
    </List>
  )
}
