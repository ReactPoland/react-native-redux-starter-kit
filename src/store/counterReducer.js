const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export default function counter(state: Counter = 0, action: Action): Counter {
  switch (action.type) {
    case DECREMENT:
      console.log("DECREMENT");
      return state - 1
    case INCREMENT:
      console.log("INCREMENT");
      return state + 1
    default:
      return state
  }
}

export const decrement = (): Action => ({
  type: DECREMENT,
})

export const increment = (): Action => ({
  type: INCREMENT,
})
