import { useEffect } from 'react';

export default function GetGameID({ playerID, setGameID }) {
	useEffect(() => {
		if (playerID) {
			const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerID}/ids?start=0&count=5&api_key=${process.env.REACT_APP_TEAM_KEY}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setGameID(data);
				})
				.catch(console.error);
		}
	}, [playerID]);

	return null;
}
