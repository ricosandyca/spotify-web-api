import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }
})

function TruncatedText({ children, maxLine = 1 }) {
  const classes = useStyles()
  return (
    <span className={classes.root} style={{ WebkitLineClamp: maxLine }}>
      {children}
    </span>
  )
}

export default TruncatedText
