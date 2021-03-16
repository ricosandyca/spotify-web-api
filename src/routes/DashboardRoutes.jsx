import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import DashboardPage from '../pages/DashboardPage'
import SongListPage from '../pages/SongListPage'
import ResponsiveDrawer from '../components/Drawer'

const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
    exact: true
  },
  {
    path: '/dashboard/playlist/:playlistId',
    component: SongListPage,
    exact: true
  },
  {
    children: <Redirect to='/dashboard' />
  }
]

export default function DashboardRoutes() {
  return (
    <ResponsiveDrawer>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </ResponsiveDrawer>
  )
}
