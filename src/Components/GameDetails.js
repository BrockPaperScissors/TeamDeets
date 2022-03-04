import React from 'react';
import { useEffect } from 'react';

export default function GetGameDetails({ gameID, playerID, setGameDetails }) {
	useEffect(() => {
		if (gameID) {
			console.log(gameID);
			const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${gameID[0]}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
			console.log(url);
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setGameDetails(data);
					console.log(data);
				});
		}
	}, [gameID]);

	return <h3>Hello from Game Details</h3>;
}
