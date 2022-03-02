import './App.css';
import Player from './Components/Player';
import Game from './Components/Game';
import GameDetails from './Components/GameDetails';
import FindPlayer from './Components/FindPlayer';

function App() {
	return (
		<div>
			<FindPlayer />
			<Player />
			<Game />
			<GameDetails />
		</div>
	);
}

export default App;
