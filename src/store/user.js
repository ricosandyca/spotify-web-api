import { selector } from 'recoil'

import appConfig from '../config/app'
import { getSpotifyAuthToken } from '../services/auth'

export const userData = selector({
  key: 'userData',
  get: async () => {
    try {
      const userAuth = getSpotifyAuthToken()
      const res = await fetch(appConfig.spotifyAPIURL + '/me', {
        method: 'GET',
        headers: {
          Authorization: `${userAuth.token_type} ${userAuth.access_token}`
        }
      })
      return await res.json()
    } catch {
      return {}
    }
  }
})
