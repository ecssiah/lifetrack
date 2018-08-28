import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
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

const store = createStore(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
