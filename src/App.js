import React from 'react'
import Header from './view/Header'
import { Provider } from './react-redux'
import store from './store'

export default function App() {
  return <Provider store={ store }>
    <Header />
  </Provider>

}