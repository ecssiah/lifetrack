import { SET_TIME, UPDATE_TIME } from '../actions/focus-actions'
import { UPDATE_FOCUS } from '../actions/focus-actions'
import { UPDATE_EXPERIENCE, UPDATE_ITERATIONS } from '../actions/focus-actions'

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
    case UPDATE_EXPERIENCE:
      let experience = state.experience + 0.01666666666
      let level = state.level

      if (experience >= 100) {
        experience = 0
        level += 1
      }

      return {
        ...state,
        experience: experience,
        level: level,
      }
    case UPDATE_ITERATIONS:
      return {
        ...state,
        iterations: state.iterations + 1
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

