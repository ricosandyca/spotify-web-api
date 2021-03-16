import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import ProfilePage from '../pages/ProfilePage'
import PlayListPage from '../pages/PlayListPage'
import SongListPage from '../pages/SongListPage'

const routes = [
  {
    path: '/dashboard/profile',
    component: ProfilePage,
    exact: true
  },
  {
    path: '/dashboard/playlist',
    component: PlayListPage,
    exact: true
  },
  {
    path: '/dashboard/song-list',
    component: SongListPage,
    exact: true
  },
  {
    children: <Redirect to='/dashboard/profile'/>
  }
]

export default function DashboardRoutes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  )
}
