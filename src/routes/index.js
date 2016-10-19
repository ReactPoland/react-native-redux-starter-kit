import Home from './Home'
import Counter from './Counter'
import Dashboard from './Dashboard'

export default {
	indexRoute: Home,
	childRoutes: [Counter, Dashboard]
}
