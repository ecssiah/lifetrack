import { CHANGE_LOCATION } from '../actions/header-actions'

function headerReducer(state = [], action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        current_page: action.payload,
        previous_page: state.current_page,
      }
    default:
      return state
  }
}

export default headerReducer

