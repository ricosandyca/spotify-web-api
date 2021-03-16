import theme from '../config/theme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

export default function withTheme(Content) {
  return function() {
    return (
      <MuiThemeProvider theme={theme}>
        <Content />
      </MuiThemeProvider>
    )
  }
}
