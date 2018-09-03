import { LOADED_FOCUSES, DELETED_FOCUS } from '../actions/selection-actions'

function selectionReducer(state = [], action) {
  switch (action.type) {
    case LOADED_FOCUSES:
      return action.payload
    case DELETED_FOCUS:
      return state.filter(focus => focus.id === action.payload)
    default:
      return state
  }
}

export default selectionReducer
