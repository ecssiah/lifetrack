import { LOADED_SETTINGS } from '../actions/settings-actions'

function settingsReducer(state = [], action) {
  switch (action.type) {
    case LOADED_SETTINGS:
      let settingsObject = {}

      for (let i = 0; i < action.payload.length; ++i)
        settingsObject[action.payload[i].name] = action.payload[i].value

      return settingsObject
    default:
      return state
  }
}

export default settingsReducer
