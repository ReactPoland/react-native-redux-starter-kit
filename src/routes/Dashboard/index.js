import DashboardContainer from './containers/DashboardContainer'
import reducer from './modules/dashboard'

export default {
  path: 'dashboard',
  title: 'Dashboard',
  component: DashboardContainer,
  reducer: reducer
}
