const VISITS_COUNT = 'VISITS_COUNT'

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
  type: VISITS_COUNT,
  value
})

const initialState = 0

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case VISITS_COUNT:
      return state + action.value
    default:
      return state
  }
}
