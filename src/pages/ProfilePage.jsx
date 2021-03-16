import { useHistory } from 'react-router-dom'
import { deleteSpotifyAuthToken } from '../services/auth'

export default function ProfilePage() {
  const history = useHistory()
  const logout = () => {
    deleteSpotifyAuthToken()
    history.push('/auth')
  }

  return (
    <div>
      <div>Profile page</div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}
