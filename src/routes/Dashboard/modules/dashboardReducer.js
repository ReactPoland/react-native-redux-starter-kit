const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT'
const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'
const DASHBOARD_CHANGE_ITEMS_ORDER = 'DASHBOARD_CHANGE_ITEMS_ORDER'

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value
})

export const dashboardAddItem = (label) => ({
    type: DASHBOARD_ADD_ITEM,
    label
})

export const dashboardEditItem = (label, key) => ({
    type: DASHBOARD_EDIT_ITEM,
    label,
    key
})

export const dashboardChangeItemsOrder = (orderArray) => ({
    type: DASHBOARD_CHANGE_ITEMS_ORDER,
    orderArray
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
        key: mockedId
      }
      state.list.push(newItem);
      return Object.assign({}, state)
    case DASHBOARD_EDIT_ITEM:
      const newLabel = action.label;
      const key = action.key;
      for(let i=0; i<state.list.length; i++){
        if(state.list[i].key == key){
          state.list[i].label = newLabel;
          break;
        }
      }
      return Object.assign({}, state)
    case DASHBOARD_CHANGE_ITEMS_ORDER:
      let newList = [];
      action.orderArray.map((orderItem)=>{
        state.list.map((stateItem)=>{
          if(orderItem == stateItem.key) {
            newList.push(stateItem);
          }
        })
      });
      return {
        ...state,
        list: newList
      }
    default:
      return state
  }
}
