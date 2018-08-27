import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import selectionReducer from './reducers/selection-reducer'
import focusReducer from './reducers/focus-reducer'
import settingsReducer from './reducers/settings-reducer'

const rootReducer = combineReducers({
  selectionReducer: selectionReducer, 
  focusReducer: focusReducer,
  settingsReducer: settingsReducer
})

const store = createStore(rootReducer)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
