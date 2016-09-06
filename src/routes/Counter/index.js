import CounterContainer from './containers/counterContainer'
import reducer from './modules/counterReducer'

export default {
  path: 'counter',
  title: 'Counter',
  component: CounterContainer,
  reducer: reducer
}
