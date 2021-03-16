import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'

import IndexRoutes from './routes/IndexRoutes'
import withTheme from './hoc/withTheme'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Please wait...</div>}>
        <IndexRoutes />
      </Suspense>
    </RecoilRoot>
  )
}

export default withTheme(App)
