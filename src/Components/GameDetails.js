import { useEffect } from 'react';

export default function GetGameDetails({ gameID, setGameDetails }) {
	useEffect(() => {
		if (gameID) {
			console.log(gameID);
			const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${gameID}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setGameDetails(data);
				});
		}
	}, [gameID]);

	return null;
}
