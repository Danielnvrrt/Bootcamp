import ReactDOM from 'react-dom/client'
import React from "react"
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import './index.css'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
