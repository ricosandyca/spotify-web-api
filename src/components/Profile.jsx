import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import CustomButton from './CustomButton'

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

  return (
    <div className={classes.profile}>
      <Avatar src='https://material-ui.com/static/images/avatar/3.jpg' className={classes.avatar} />
      <Box className={classes.accountInfo}>
        <Typography variant='body2'><b>Rico Sandyca</b></Typography>
        <Typography variant='caption'>ricosandyca.if@gmail.com</Typography>
      </Box>
      <CustomButton
        size='small'
        className={classes.button}
        startIcon={<LogoutIcon />}
      >
        LOGOUT
      </CustomButton>
    </div>
  )
}
