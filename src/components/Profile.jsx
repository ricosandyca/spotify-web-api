import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import makeStyles from '@material-ui/core/styles/makeStyles'

import CustomButton from './CustomButton'
import { userData } from '../store/user'
import { deleteSpotifyAuthToken } from '../services/auth'
import defaultAvatar from '../assets/img/default-avatar.jpg'

const useStyles = makeStyles(theme => ({
  profile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px !important`,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  accountInfo: {
    padding: theme.spacing(1.5)
  },
  button: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    borderRadius: '100px'
  }
}))

export default function Profile() {
  const classes = useStyles()
  const history = useHistory()
  const user = useRecoilValue(userData)

  const logout = () => {
    deleteSpotifyAuthToken()
    history.push('/auth')
  }

  return (
    <div className={classes.profile}>
      <Box
        onClick={() => history.push('/dashboard')}
        display='flex'
        flexDirection='column'
        alignItems='center'
        style={{ cursor: 'pointer' }}
      >
        <Avatar src={user.images[0]?.url || defaultAvatar} className={classes.avatar} />
        <Box className={classes.accountInfo}>
          <Typography variant='body2'><b>{user.display_name}</b></Typography>
          <Typography variant='caption'>{user.email}</Typography>
        </Box>
      </Box>
      <CustomButton
        size='small'
        className={classes.button}
        startIcon={<LogoutIcon />}
        onClick={logout}
      >
        LOGOUT
      </CustomButton>
    </div>
  )
}
