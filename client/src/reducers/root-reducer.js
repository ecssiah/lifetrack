import { combineReducers } from 'redux'
import headerReducer from './header-reducer'
import selectionReducer from './selection-reducer'
import focusReducer from './focus-reducer'
import settingsReducer from './settings-reducer'

const rootReducer = combineReducers({
  header: headerReducer,
  selection: selectionReducer, 
  focus: focusReducer,
  settings: settingsReducer,
})

export default rootReducer
