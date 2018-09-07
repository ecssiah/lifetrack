import { SET_TIME, UPDATE_TIME } from '../actions/focus-actions'
import { UPDATE_FOCUS } from '../actions/focus-actions'
import { UPDATE_EXPERIENCE, UPDATE_ITERATIONS } from '../actions/focus-actions'

export const SECOND = 1 / 60.0

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
        time: state.time - SECOND
      }
    case UPDATE_EXPERIENCE:
      let level = state.level
      let experience = state.experience + SECOND

      if (experience >= 100) {
        experience = 0
        level += 1
      }

      return {
        ...state,
        level: level,
        experience: experience,
      }
    case UPDATE_ITERATIONS:
      return {
        ...state,
        iterations: state.iterations + 1
      }
    case UPDATE_FOCUS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default focusReducer

