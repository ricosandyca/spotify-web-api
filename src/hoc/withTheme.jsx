import theme from '../config/theme'
import { ThemeProvider } from '@material-ui/core/styles'

export default function withTheme(Content) {
  return function() {
    return (
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    )
  }
}
