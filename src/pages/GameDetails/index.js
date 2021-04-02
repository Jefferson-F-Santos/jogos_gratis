import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import './style.css';

export default function GameDetails() {
    const [gameData, setGameData] = useState(null)

    let { id } = useParams()

    const getGameDetails = () => {
        fetch(`https://www.freetogame.com/api/game?id=${id}`)
            .then(res => res.json())
            .then(res => setGameData(res))
    }

    useEffect(() => {
        getGameDetails()
    }, [])

    if (gameData === null) {
        return (
            <h1 style={{ color: 'white' }}>Carregando...</h1>
        )
    } else {
        return (
            <div className="container">

                <div className="contConfig contTitleImg">
                    <h2>{gameData.title}</h2>
                    <div className="contImg">
                        <img src={gameData.screenshots[0].image} />
                    </div>
                </div>

                <div className="contConfig contInfo">
                    <p>{gameData.description}</p>
                </div>

                <div className="contConfig contCarousel">
                    <img src={gameData.screenshots[1].image} />
                </div>

                <div className="contConfig">
                    <h3>Requisitos mínimos</h3>
                    <div className="tatle">

                        <div className="items">
                            <span>Sistema Operacional: </span>
                            <span>{gameData.minimum_system_requirements.os}</span>
                        </div>
                        <div className="items">
                            <span>Processador: </span>
                            <span>{gameData.minimum_system_requirements.processor}</span>
                        </div>
                        <div className="items">
                            <span>Memória RAM: </span>
                            <span>{gameData.minimum_system_requirements.memory}</span>
                        </div>
                        <div className="items">
                            <span>Placa de vídeo: </span>
                            <span>{gameData.minimum_system_requirements.graphics}</span>
                        </div>

                        <div className="items">
                            <span>Armazenamento: </span>
                            <span>{gameData.minimum_system_requirements.storage}</span>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}