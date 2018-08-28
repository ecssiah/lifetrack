import { combineReducers } from 'redux'
import selectionReducer from './selection-reducer'
import focusReducer from './focus-reducer'
import settingsReducer from './settings-reducer'

const rootReducer = combineReducers({
  selection: selectionReducer, 
  focus: focusReducer,
  settings: settingsReducer
})

export default rootReducer
