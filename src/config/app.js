const app = {
  appName: process.env.REACT_APP_NAME || 'Spotify Web API',
  appURL: process.env.REACT_APP_URL || 'http://localhost:3000',
  spotifyClientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID || '',
  spotifyAPIURL: process.env.REACT_APP_SPOTIFY_API_URL || 'https://api.spotify.com/v1'
}


export default app
