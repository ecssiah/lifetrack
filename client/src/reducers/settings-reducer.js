import { LOADED_SETTINGS, UPDATED_SETTING } from '../actions/settings-actions'

function settingsReducer(state = [], action) {
  switch (action.type) {
    case LOADED_SETTINGS:
      return action.payload
    case UPDATED_SETTING:
      const output = state.slice()
      const idx = output.findIndex(setting => setting.id === action.payload.id) 
      output[idx].value = action.payload.value

      return output
    default:
      return state
  }
}

export default settingsReducer
