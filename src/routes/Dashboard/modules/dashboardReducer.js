const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().dashboard))
        resolve()
      }, 400)
    })
  }
}

export const increment = (value = 1) => ({
  type: DASHBOARD_INCREMENT,
  value
})

const initialState = 0

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_INCREMENT:
      return state + action.value
    default:
      return state
  }
}
