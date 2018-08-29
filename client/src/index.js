import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root-reducer' 
import registerServiceWorker from './registerServiceWorker'
import App from './App'

export const PAGES = {
  SELECTION: 'selection',
  FOCUS: 'focus',
  SETTINGS: 'settings',
}

const initialState = { 
  header: {
    current_page: PAGES.SELECTION,
    previous_page: PAGES.SELECTION,
  },
  selection: [],
  focus: {
    title: '',
    time: 0,
    goal: 10,
    level: 0,
  },
  settings: {
    workPeriod: 20,
    breakPeriod: 2,
    backgroundColor: '#8e7985',
    progressColor: '#dc48ad',
  }, 
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, 
  initialState, 
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
