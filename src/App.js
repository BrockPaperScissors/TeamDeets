import './App.css';
import MakeCard from './Components/MakeCard';
import Player from './Components/Player';
import Game from './Components/Game';
import GameDetails from './Components/GameDetails';
import FindPlayer from './Components/FindPlayer';
import React, { useState, useEffect } from 'react';
import { UserContext } from './Components/UserContext';
import GetGameID from './Components/Game';

function App() {
	const [playerID, setPlayerID] = useState('');
	const [gameID, setGameID] = useState('');
	const [gameDetails, setGameDetails] = useState({});
	return (
		<div>
			<UserContext.Provider
				value={{
					playerID,
					gameID,
					gameDetails,
					setPlayerID,
					setGameID,
					setGameDetails,
				}}>
				<MakeCard />
				<FindPlayer setplayerID={setPlayerID} />
				<Player />
				<GameDetails />
				<GetGameID playerID={playerID} gameID={gameID} />
			</UserContext.Provider>
		</div>
	);
}

export default App;
