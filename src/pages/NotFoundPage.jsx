import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  verticalDivider: {
    height: 40,
    width: 1,
    background: theme.palette.text.hint
  }
}))

export default function NotFoundPage() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justify='center'
        wrap='nowrap'
        style={{ height: '100%' }}
      >
        <Grid item>
          <Typography variant='h6'>404</Typography>
        </Grid>
        <Grid item>
          <div className={classes.verticalDivider} />
        </Grid>
        <Grid item>
          <Typography variant='body2'>Page Not Found</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
