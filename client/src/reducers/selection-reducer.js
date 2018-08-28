import { LOADED_FOCUSES } from '../actions/selection-actions'

function selectionReducer(state = [], action) {
  switch (action.type) {
    case LOADED_FOCUSES:
      return action.payload
    default:
      return state
  }
}

export default selectionReducer
