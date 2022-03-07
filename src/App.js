import './App.css';
import MakeCard from './Components/MakeCard';
import Player from './Components/Player';
import GetGameDetails from './Components/GameDetails';
import FindPlayer from './Components/FindPlayer';
import React, { useState } from 'react';
import GetGameID from './Components/Game';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
	const [playerID, setPlayerID] = useState('');
	const [gameID, setGameID] = useState('');
	const [gameDetails, setGameDetails] = useState(null);
	const [playerDetails, setPlayerDetails] = useState(null);
	return (
		<>
			<FindPlayer setPlayerID={setPlayerID} />
			<GetGameID playerID={playerID} gameID={gameID} setGameID={setGameID} />
			<GetGameDetails gameID={gameID} setGameDetails={setGameDetails} />
			<Player gameDetails={gameDetails} setPlayerDetails={setPlayerDetails} />
			<div id='container'>
				<Link to='/'>
					<h1 id='page-title'>Team Deets</h1>
				</Link>
				<nav id='game-tabs'>
					<Link to='/gameone'>
						<li className='games'>Most Recent Game</li>
					</Link>
					<Link to='/gametwo'>
						<li className='games'>Game 2</li>
					</Link>
					<Link to='/gamethree'>
						<li className='games'>Game 3</li>
					</Link>
					<Link to='/gamefour'>
						<li className='games'>Game 4</li>
					</Link>
					<Link to='/gamefive'>
						<li className='games'>Game 5</li>
					</Link>
				</nav>
				<main>
					<Routes>
						<Route path='/gameone' element={<MakeCard gameID={gameID} />} />
						{/* <Route path='/gametwo' element={<MakeCard gameDetails={gameDetails} playerDetails={playerDetails} />} />
						<Route
							path='/gamethree'
							element={<MakeCard gameDetails={gameDetails} playerDetails={playerDetails} />}
						/>
						<Route path='/gamefour' element={<MakeCard gameDetails={gameDetails} playerDetails={playerDetails} />} />
						<Route path='/gamefive' element={<MakeCard gameDetails={gameDetails} playerDetails={playerDetails} />} /> */}
						<Route path='/' element={<Navigate to='/' />} />
					</Routes>
				</main>

				<MakeCard gameDetails={gameDetails} playerDetails={playerDetails} />
			</div>
		</>
	);
}

export default App;
