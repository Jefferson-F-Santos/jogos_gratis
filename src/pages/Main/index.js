import React, { useState, useEffect } from 'react';

import './style.css';
import CardGame from '../../Components/CardGame'

function Main({ receiveGameId }) {

  const [gameData, setGameData] = useState([])

  const getGames = () => {
    fetch("https://www.freetogame.com/api/games", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => setGameData(res))
  }

  useEffect(() => {
    getGames()
  }, [])

  const changeDateFormat = (date) => {
    const parts = date.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  }

  if (gameData !== []) {
    return gameData.map((game) => (
      <CardGame
        img={game.thumbnail}
        name={game.title}
        description={game.short_description}
        genre={game.genre}
        date={changeDateFormat(game.release_date)}
        showDetails={() => receiveGameId(game.id)}
      />
    ))
  }
}

export default Main;
