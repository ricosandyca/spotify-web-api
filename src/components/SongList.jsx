import { Fragment } from 'react'
import { useRecoilValue } from 'recoil'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { userData } from '../store/user'
import { useDeleteItemFromPlaylist } from '../hooks/usePlaylist'
import defaultPlaylistImage from '../assets/img/default-playlist-image.jpg'

const useStyles = makeStyles(theme => ({
  subheader: {
    background: theme.palette.background.default
  }
}))

export default function SongList({ playlist }) {
  const { tracks: { items: tracks } } = playlist
  const classes = useStyles()
  const user = useRecoilValue(userData)
  const { deleteItem } = useDeleteItemFromPlaylist()

  const isOwner = playlist.owner.id === user.id

  const deleteTrack = (trackId) => {
    deleteItem(playlist.id, trackId, success => {
      if (success) {
        window.location.reload()
      }
    })
  }

  return (
    <List subheader={
      <ListSubheader className={classes.subheader}>Tracks</ListSubheader>
    }>
      {tracks.map((track, i) => (
        <Fragment key={i}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src={(track.track.album.images || [])[0]?.url || defaultPlaylistImage} />
            </ListItemAvatar>
            <ListItemText
              primary={track.track.name}
              secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textPrimary'
                  >
                    {track.track.artists.reduce((state, artist) => (
                      state + ' • ' + artist.name
                    ), '')}
                  </Typography>
                  {` — ${track.track.album.name}`}
                </>
              }
            />
            {isOwner && (
              <ListItemSecondaryAction>
                <IconButton edge='end' onClick={() => deleteTrack(track.track.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
          <Divider variant='inset' component='li' />
        </Fragment>
      ))}
    </List>
  )
}
