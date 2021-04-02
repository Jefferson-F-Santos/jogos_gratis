import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './style.css';
import CardGame from '../../Components/CardGame'

function Main() {

  const [gameData, setGameData] = useState([])

  const getGames = () => {
    fetch("https://www.freetogame.com/api/games")
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

  if(gameData !== []){
    return gameData.map((game) => (
      <Link>
        <CardGame
          img={game.thumbnail}
          name={game.title}
          description={game.short_description}
          genre={game.genre}
          date={changeDateFormat(game.release_date)}
        />
      </Link>
    ))
  }
}

export default Main;
