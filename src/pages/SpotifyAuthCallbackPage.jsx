import { Redirect } from 'react-router-dom'

import { saveSpotifyAuthToken } from '../services/auth'
import { getURLHash } from '../utils/url'

export default function SpotifyAuthCallbackPage() {
  // save spotify auth data
  saveSpotifyAuthToken(getURLHash())

  return <Redirect to='/dashboard'/>
}
