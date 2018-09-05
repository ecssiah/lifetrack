import { LOADED_FOCUSES } from '../actions/selection-actions'
import { DELETED_FOCUS, ADDED_FOCUS } from '../actions/selection-actions'
import { UPDATE_SELECTION } from '../actions/selection-actions'

function selectionReducer(state = [], action) {
  let output

  switch (action.type) {
    case UPDATE_SELECTION:
      output = state.filter(focus => focus.id !== action.payload.id)
      output.push(action.payload)
      return output
    case LOADED_FOCUSES:
      return action.payload
    case ADDED_FOCUS:
      output = state.slice()
      output.push(action.payload)
      return output
    case DELETED_FOCUS:
      output = state.filter(focus => focus.id !== action.payload)
      return output
    default:
      return state
  }
}

export default selectionReducer
