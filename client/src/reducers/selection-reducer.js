import { 
  UPDATE_SELECTION, LOADED_SELECTION, 
  DELETED_FOCUS, ADDED_FOCUS
} from '../actions/selection-actions'

function selectionReducer(state = [], action) {
  let newState

  switch (action.type) {
    case UPDATE_SELECTION:
      newState = state.filter(focus => focus.id !== action.payload.id)
      newState.push(action.payload)
      return newState
    case LOADED_SELECTION:
      return action.payload
    case ADDED_FOCUS:
      newState = state.slice()
      newState.push(action.payload)
      return newState
    case DELETED_FOCUS:
      newState = state.filter(focus => focus.id !== action.payload)
      return newState
    default:
      return state
  }
}

export default selectionReducer
