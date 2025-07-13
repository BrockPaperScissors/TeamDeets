import "./App.css";
import MakeCard from "./Components/MakeCard";
import Player from "./Components/Player";
import FindPlayer from "./Components/FindPlayer";
import React, { useState } from "react";
import GetGameID from "./Components/Game";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";

function App() {
	const [playerID, setPlayerID] = useState("");
	const [gameID, setGameID] = useState("");
	const [gameDetails, setGameDetails] = useState(null);
	const [playerDetails, setPlayerDetails] = useState(null);

	return (
		<>
			<img
				src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_6.jpg "
				alt=""
				id="home-image"
			/>
			<Home />
			<FindPlayer setPlayerID={setPlayerID} />
			<GetGameID playerID={playerID} gameID={gameID} setGameID={setGameID} />
			<Player gameDetails={gameDetails} setPlayerDetails={setPlayerDetails} />
			<div id="container">
				<Link to="/">
					<h1 id="page-title">Team Deets</h1>
				</Link>
				<nav id="game-tabs">
					<Link to="/game/0">
						<li className="games">Most Recent Game</li>
					</Link>
					<Link to="/game/1">
						<li className="games">Game 2</li>
					</Link>
					<Link to="/game/2">
						<li className="games">Game 3</li>
					</Link>
					<Link to="/game/3">
						<li className="games">Game 4</li>
					</Link>
					<Link to="/game/4">
						<li className="games">Game 5</li>
					</Link>
				</nav>
				<main>
					<Routes>
						<Route
							path="/game/:index"
							element={
								<MakeCard
									gameDetails={gameDetails}
									playerDetails={playerDetails}
									setGameDetails={setGameDetails}
									gameID={gameID}
								/>
							}
						/>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
