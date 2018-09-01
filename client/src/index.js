import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root-reducer' 
import registerServiceWorker from './registerServiceWorker'
import App from './App'

const initialState = { 
  header: {
    current_page: '/',
    previous_page: '/',
  },
  selection: [],
  focus: {},
  settings: [], 
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, 
  initialState, 
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
