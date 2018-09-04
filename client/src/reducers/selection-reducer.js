import { LOADED_FOCUSES } from '../actions/selection-actions'
import { DELETED_FOCUS, ADDED_FOCUS } from '../actions/selection-actions'

function selectionReducer(state = [], action) {
  switch (action.type) {
    case LOADED_FOCUSES:
      return action.payload
    case ADDED_FOCUS:
      const output = state.slice()
      output.push(action.payload)
      return output
    case DELETED_FOCUS:
      const newState = state.filter(focus => focus.id !== action.payload)
      return newState
    default:
      return state
  }
}

export default selectionReducer
