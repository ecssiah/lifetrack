import { CHANGE_LOCATION } from '../actions/header-actions'

function headerReducer(state = [], action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        route: action.payload,
      }
    default:
      return state
  }
}

export default headerReducer

