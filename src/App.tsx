import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routing/Routing'
import storeConfig from './configureStore'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'

const store = storeConfig()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
