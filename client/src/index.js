import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root-reducer' 
import registerServiceWorker from './registerServiceWorker'

const initialState = { 
  header: {
    page: 'selection',
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
