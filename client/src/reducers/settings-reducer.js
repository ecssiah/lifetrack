import { LOADED_SETTINGS, UPDATED_SETTING } from '../actions/settings-actions'

function settingsReducer(state = [], action) {
  let newState

  switch (action.type) {
    case LOADED_SETTINGS:
      return action.payload
    case UPDATED_SETTING:
      newState = state.slice()
      const idx = newState.findIndex(setting => 
        setting.id === action.payload.id
      ) 
      newState[idx].value = action.payload.value

      return newState
    default:
      return state
  }
}

export default settingsReducer
