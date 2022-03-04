import './App.css';
import MakeCard from './Components/MakeCard';
import Player from './Components/Player';
import Game from './Components/Game';
import GetGameDetails from './Components/GameDetails';
import FindPlayer from './Components/FindPlayer';
import React, { useState, useEffect } from 'react';
import GetGameID from './Components/Game';

function App() {
	const [playerID, setPlayerID] = useState('');
	const [gameID, setGameID] = useState('');
	const [gameDetails, setGameDetails] = useState({});
	const [playerDetails, setPlayerDetails] = useState({});
	return (
		<div>
			<FindPlayer setPlayerID={setPlayerID} />
			<GetGameID playerID={playerID} gameID={gameID} setGameID={setGameID} />
			<GetGameDetails
				gameID={gameID}
				playerID={playerID}
				setGameDetails={setGameDetails}
			/>
			<MakeCard />
			<Player />
		</div>
	);
}

export default App;
