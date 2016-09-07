const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT'

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value
})

const initialState = {
  visitsCount: 0,
  list: [
    {key: 0, label: 'Angular'},
    {key: 1, label: 'JQuery'},
    {key: 2, label: 'Polymer'},
    {key: 3, label: 'ReactJS'}
  ]
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_VISITS_INCREMENT:
      state.visitsCount = state.visitsCount + action.value
      return Object.assign({}, state)
    default:
      return state
  }
}
