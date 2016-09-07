const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT'

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value
})

const initialState = 0

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_VISITS_INCREMENT:
      return state + action.value
    default:
      return state
  }
}
