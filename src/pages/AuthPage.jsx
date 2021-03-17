import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import appConfig from '../config/app'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh'
  },
  spotifyButton: {
    margin: theme.spacing(2),
    fontSize: '14px',
    fontFamily: '"Roboto", sans-serif !important',
    fontWeight: '500',
    letterSpacing: '.25px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: 'auto',
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(10),
    padding: `0 ${theme.spacing(2)}px`,
    boxSizing: 'content-box',
    cursor: 'pointer',
    transition: '.2s',
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main
    },
  },
  spotifyLogo: {
    height: '55%',
    marginRight: theme.spacing(1.5),
    width: 'auto',
    '& path': {
      fill: '#2EA953'
    }
  }
}))

export default function AuthPage() {
  const classes = useStyles()

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      className={classes.root}
    >
      <Typography variant='h6' align='center'>Sign in to continue</Typography>
      <SpotifyAuth
        clientID={appConfig.spotifyClientId}
        redirectUri={`${appConfig.appURL}/spotify-auth`}
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail, Scopes.playlistModifyPrivate, Scopes.playlistModifyPublic]}
        showDialog={true}
        noCookie={false}
        btnClassName={classes.spotifyButton}
        logoClassName={classes.spotifyLogo}
      />
    </Box>
  )
}
