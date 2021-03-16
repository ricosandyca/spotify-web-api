import { RecoilRoot } from 'recoil'
import IndexRoutes from './routes/IndexRoutes'
import withTheme from './hoc/withTheme'

function App() {
  return (
    <RecoilRoot>
      <IndexRoutes />
    </RecoilRoot>
  )
}

export default withTheme(App)
