import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Main from './pages/Main'
import GameDetails from './pages/GameDetails'

export default function App() {
  const [gameId, setGameId] = useState(null)

  const showGameDetails = async (id) => {
    await setGameId(id)
    document.querySelector('#callDetailsPage').click()
  }

  return (
    <Router>
      <Link to={`/details/${gameId}`} id="callDetailsPage" style={{ display: 'none' }}></Link>
      <Switch>
        <Route path="/details/:id">
          <GameDetails />
        </Route>
        <Route path="/">
          <Main receiveGameId={(id) => showGameDetails(id)} />
        </Route>

      </Switch>
    </Router>
  )
}
