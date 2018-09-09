import { 
  SET_TIME, UPDATE_TIME, UPDATE_FOCUS,  
  UPDATE_EXPERIENCE, UPDATE_PERIODS, RESET_PERIODS 
} from '../actions/focus-actions'

export const SECOND = 1 / 60.0
export const EXP_PER_SECOND = 1 / 60.0

function focusReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_FOCUS:
      return {
        ...state,
        ...action.payload,
      }
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
      let experience = state.experience + EXP_PER_SECOND

      if (experience >= 100) {
        experience = 0
        level += 1
      }

      return {
        ...state,
        level: level,
        experience: experience,
      }
    case UPDATE_PERIODS:
      return {
        ...state,
        periods: state.periods + 1
      }
    case RESET_PERIODS:
      return {
        ...state,
        periods: 0
      }
    default:
      return state
  }
}

export default focusReducer

