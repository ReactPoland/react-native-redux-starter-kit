const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT'
const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value
})

export const dashboardAddItem = (label) => ({
    type: DASHBOARD_ADD_ITEM,
    label
})

export const dashboardEditItem = (label, index) => ({
    type: DASHBOARD_EDIT_ITEM,
    label,
    index
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
    case DASHBOARD_ADD_ITEM:
      const mockedId = Math.floor(Date.now() / 1000);
      const newItem = {
        label: action.label,
        id: mockedId
      }
      state.list.push(newItem);
      return Object.assign({}, state)
    case DASHBOARD_EDIT_ITEM:
      const newLabel = action.label;
      const index = action.index;
      state.list[index].label = newLabel;
      return Object.assign({}, state)
    default:
      return state
  }
}
