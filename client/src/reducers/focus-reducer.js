import { UPDATE_FOCUS } from '../actions/focus-actions'

function focusReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_FOCUS:
      return {
        name: action.payload.name,
        level: action.payload.level,
        experience: action.payload.experience,
      }
    default:
      return state
  }
}

export default focusReducer

