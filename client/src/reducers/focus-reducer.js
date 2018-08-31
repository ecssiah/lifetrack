import { UPDATE_FOCUS } from '../actions/focus-actions'

function focusReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_FOCUS:
      return {
        name: action.payload.name,
        time: 0,
        level: action.payload.level,
        experience: action.payload.experience,
        goal: action.payload.goal,
      }
    default:
      return state
  }
}

export default focusReducer

