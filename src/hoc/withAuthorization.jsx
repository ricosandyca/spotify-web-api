import { Redirect } from 'react-router-dom'
import { getSpotifyAuthToken } from '../services/auth'

export function withAuthorizedUser(Content) {
  return function() {
    const token = getSpotifyAuthToken()
    if (!token) return <Redirect to={{
      pathname: '/auth',
      state: { message: 'You have to signin to access the page' }
    }} />
    return <Content />
  }
}

export function withUnauthorizedUser(Content) {
  return function() {
    const token = getSpotifyAuthToken()
    if (token) return <Redirect to={{
      pathname: '/dashboard',
      state: { message: 'You have already signed in' }
    }} />
    return <Content />
  }
}
