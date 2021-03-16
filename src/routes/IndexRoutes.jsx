import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { withAuthorizedUser, withUnauthorizedUser } from '../hoc/withAuthorization'
import NotFoundPage from '../pages/NotFoundPage'
import AuthPage from '../pages/AuthPage'
import SpotifyAuthCallbackPage from '../pages/SpotifyAuthCallbackPage'
import DashboardRoutes from './DashboardRoutes'

const routes = [
  {
    path: '/',
    children: <Redirect to='/auth' />,
    exact: true
  },
  {
    path: '/auth',
    component: withUnauthorizedUser(AuthPage),
    exact: true
  },
  {
    path: '/spotify-auth',
    component: withUnauthorizedUser(SpotifyAuthCallbackPage),
    exact: true
  },
  {
    path: '/dashboard',
    component: withAuthorizedUser(DashboardRoutes)
  },
  {
    component: NotFoundPage
  }
]

export default function IndexRoutes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}
