import { selector } from 'recoil'

import appConfig from '../config/app'
import { getSpotifyAuthToken } from '../services/auth'

export const playlistState = selector({
  key: 'playlists',
  get: async () => {
    try {
      const userAuth = getSpotifyAuthToken()
      const res = await fetch(appConfig.spotifyAPIURL + '/me/playlists', {
        method: 'GET',
        headers: {
          Authorization: `${userAuth.token_type} ${userAuth.access_token}`
        }
      })
      return await res.json()
    } catch {
      return []
    }
  }
})
