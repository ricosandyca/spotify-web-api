import { SpotifyAuth } from 'react-spotify-auth'

import appConfig from '../config/app'

export default function AuthPage() {
  return (
    <div>
      <SpotifyAuth
        clientID={appConfig.spotifyClientId}
        redirectUri={`${appConfig.appURL}/spotify-auth`}
        showDialog={true}
        noCookie={false}
      />
    </div>
  )
}
