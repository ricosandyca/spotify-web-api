import Cookies from 'js-cookie'

const SPOTIFY_ACCESS_TOKEN_KEY = 'spotify-access-token'
const SPOTIFY_TOKEN_TYPE_KEY = 'spotify-token-type'

/**
 * Get current user's auth token
 * @returns {{ access_token: String, token_type: String }|undefined} of spotify auth token
 */
export function getSpotifyAuthToken() {
  const accessToken = Cookies.get(SPOTIFY_ACCESS_TOKEN_KEY)
  const tokenType = Cookies.get(SPOTIFY_TOKEN_TYPE_KEY)
  if (!accessToken) return undefined
  return {
    access_token: accessToken,
    token_type: tokenType || 'Bearer'
  }
}

/**
 * Save access token of spotify auth to cookies
 * 
 * @param {Object} auth_data - response data from spotify auth
 * @param {String} auth_data.access_token - spotify access token
 * @param {String|Number} auth_data.expires_in - expires value of spotify auth
 * @param {String} auth_data.token_type - token type of spotify auth
 * @returns {void}
 */
export function saveSpotifyAuthToken(auth_data) {
  // set expiration date of cookie
  const expiresIn = new Date(new Date().getTime() + (1000 * +auth_data.expires_in))
  Cookies.set(SPOTIFY_ACCESS_TOKEN_KEY, auth_data.access_token, { expires: expiresIn })
  Cookies.set(SPOTIFY_TOKEN_TYPE_KEY, auth_data.token_type, { expires: expiresIn })
}

/**
 * Delete all stored spotify auth information from cookies
 * @returns {void}
 */
export function deleteSpotifyAuthToken() {
  Cookies.remove(SPOTIFY_ACCESS_TOKEN_KEY)
  Cookies.remove(SPOTIFY_TOKEN_TYPE_KEY)
}
