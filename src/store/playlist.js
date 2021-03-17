import { selector, selectorFamily } from 'recoil'

import appConfig from '../config/app'
import { getSpotifyAuthToken } from '../services/auth'

export const playlistState = selector({
  key: 'playlists',
  get: async () => {
    try {
      const userAuth = getSpotifyAuthToken()
      const res = await fetch(appConfig.spotifyAPIURL + '/me/playlists?limit=50', {
        method: 'GET',
        headers: {
          Authorization: `${userAuth.token_type} ${userAuth.access_token}`
        }
      })
      return await res.json()
    } catch {
      return {
        items: []
      }
    }
  }
})

export const playlistDetail = selectorFamily({
  key: 'playlistDetail',
  get: (playlistId) => async ({ get }) => {
    try {
      const userAuth = getSpotifyAuthToken()
      const res = await fetch(appConfig.spotifyAPIURL + `/playlists/${playlistId}`, {
        method: 'GET',
        headers: {
          Authorization: `${userAuth.token_type} ${userAuth.access_token}`
        }
      })
      return await res.json()
    } catch {
      return {
        items: []
      }
    }
  }
})
