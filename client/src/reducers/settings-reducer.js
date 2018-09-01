import { LOADED_SETTINGS } from '../actions/settings-actions'

function settingsReducer(state = [], action) {
  switch (action.type) {
    case LOADED_SETTINGS:
      return action.payload
    default:
      return state
  }
}

export default settingsReducer
