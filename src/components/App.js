import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import PokemonsTable from './PokemonsTable'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Route exact path="/" component={PokemonsTable}/>
        </div>
      </div>
    </Router>
  )
}

export default App
