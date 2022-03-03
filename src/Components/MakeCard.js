import React from 'react';
import Player from './Player';
import Game from './Game';
import GameDetails from './GameDetails';
import FindPlayer from './FindPlayer';
import { useState, useEffect } from 'react';
export default function MakeCard(props) {
	return (
		<div>
			<div>
				<FindPlayer />
				<Player />
				<Game />
				<GameDetails />
			</div>
		</div>
	);
}
