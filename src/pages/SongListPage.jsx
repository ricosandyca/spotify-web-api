import { useRecoilValue } from 'recoil'
import Box from '@material-ui/core/Box'
import { useParams } from 'react-router'

import PlaylistDetail from '../components/PlaylistDetail'
import SongList from '../components/SongList'
import { playlistDetail } from '../store/playlist'

export default function SongListPage() {
  const params = useParams()
  const playlistId = params.playlistId
  const { tracks, ...playlist } = useRecoilValue(playlistDetail(playlistId))

  return (
    <Box>
      <PlaylistDetail playlist={{ ...playlist, tracks }} />
      <SongList tracks={tracks.items} />
    </Box>
  )
}
