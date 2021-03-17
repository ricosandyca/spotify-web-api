import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { useDeleteItemFromPlaylist } from '../hooks/usePlaylist'

export default function DeleteTrackDialog({ isOpen, trackId, closeDialog, playlistId }) {
  const { deleteItem } = useDeleteItemFromPlaylist()

  const deleteTrack = () => {
    deleteItem(playlistId, trackId, success => {
      if (success) {
        window.location.reload()
      }
    })
  }

  return (
    <Dialog 
      open={isOpen && trackId}
      onClose={closeDialog}
    >
      <DialogTitle>Delete Track</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure to delete this track from the playlist?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color='primary'>
          Close
        </Button>
        <Button onClick={deleteTrack} color='secondary' autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}
