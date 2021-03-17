import { useState } from 'react'

import appConfig from '../config/app'
import { getSpotifyAuthToken } from '../services/auth'

export function useDeleteItemFromPlaylist() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const deleteItem = async (playlistId, itemids, cb) => {
    try {
      setIsLoading(true)
      setError(undefined)
      if (typeof itemids === 'string') {
        itemids = [itemids]
      }
      
      // map itemids to spotify spec
      itemids = itemids.map(id => ({
        uri: `spotify:track:${id}`
      }))

      // start deleting items
      const userAuth = getSpotifyAuthToken()
      const res = await fetch(appConfig.spotifyAPIURL + `/playlists/${playlistId}/tracks`, {
        method: 'DELETE',
        body: JSON.stringify({
          tracks: itemids
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${userAuth.token_type} ${userAuth.access_token}`
        }
      })
      if (!res.ok) throw new Error('Something error')
      cb(true)
    } catch (err) {
      setError(err)
      cb(false)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, deleteItem }
}
