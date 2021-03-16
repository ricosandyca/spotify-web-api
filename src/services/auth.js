import Cookies from 'js-cookies'

/**
 * Get current user's auth token
 * @returns {String|null} of spotify auth token
 */
export function getSpotifyAuthToken() {
  return Cookies.getItem('spotifyAuthToken')
}
