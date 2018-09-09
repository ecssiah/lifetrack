import { 
  UPDATE_SELECTION, LOADED_FOCUSES, DELETED_FOCUS, ADDED_FOCUS, UPDATE_TIMES
} from '../actions/selection-actions'

function selectionReducer(state = [], action) {
  let newState

  switch (action.type) {
    case UPDATE_SELECTION:
      newState = state.filter(focus => focus.id !== action.payload.id)
      newState.push(action.payload)
      return newState
    case LOADED_FOCUSES:
      return action.payload
    case ADDED_FOCUS:
      newState = state.slice()
      newState.push(action.payload)
      return newState
    case DELETED_FOCUS:
      newState = state.filter(focus => focus.id !== action.payload)
      return newState
    case UPDATE_TIMES:
      newState = state.map(focus => ({ 
        ...focus, 
        time: action.payload, 
      }))
      return newState
    default:
      return state
  }
}

export default selectionReducer
