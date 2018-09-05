import { SET_TIME, UPDATE_TIME, UPDATE_FOCUS } from '../actions/focus-actions'

function focusReducer(state = [], action) {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        time: action.payload
      }
    case UPDATE_TIME:
      return {
        ...state,
        time: state.time - 0.01666666666
      }
    case UPDATE_FOCUS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        level: action.payload.level,
        experience: action.payload.experience,
        iterations: action.payload.iterations,
        goal: action.payload.goal,
      }
    default:
      return state
  }
}

export default focusReducer

