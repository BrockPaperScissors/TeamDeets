import './App.css';
import MakeCard from './Components/MakeCard';
import Player from './Components/Player';
import GetGameDetails from './Components/GameDetails';
import FindPlayer from './Components/FindPlayer';
import React, { useState, useEffect } from 'react';
import GetGameID from './Components/Game';

function App() {
	const [playerID, setPlayerID] = useState('');
	const [gameID, setGameID] = useState('');
	const [gameDetails, setGameDetails] = useState(null);
	const [playerDetails, setPlayerDetails] = useState(null);
	return (
		<>
			<FindPlayer setPlayerID={setPlayerID} />
			<GetGameID playerID={playerID} gameID={gameID} setGameID={setGameID} />
			<GetGameDetails
				gameID={gameID}
				playerID={playerID}
				setGameDetails={setGameDetails}
			/>
			<Player gameDetails={gameDetails} setPlayerDetails={setPlayerDetails} />
			<div className='card-container'>
				<MakeCard gameDetails={gameDetails} playerDetails={playerDetails} />
			</div>
		</>
	);
}

export default App;
