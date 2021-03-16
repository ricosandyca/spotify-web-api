import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'

export default function Playlist() {
  return (
    <List subheader={
      <ListSubheader>
        Playlists
      </ListSubheader>
    }>
      <ListItem button component={Link} to='/dashboard/playlist/1'>
        <ListItemIcon><PlaylistPlayIcon /></ListItemIcon>
        <ListItemText primary='My Playlist' />
      </ListItem>
    </List>
  )
}
