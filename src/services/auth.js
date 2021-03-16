import Cookies from 'js-cookie'

/**
 * Get current user's auth token
 * @returns {String|null} of spotify auth token
 */
export function getSpotifyAuthToken() {
  return Cookies.get('spotifyAuthToken')
}
