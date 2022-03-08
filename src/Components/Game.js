import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetGameID({ playerID, setGameID }) {
	let navigate = useNavigate();
	useEffect(() => {
		if (playerID) {
			const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerID}/ids?start=0&count=5&api_key=${process.env.REACT_APP_TEAM_KEY}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setGameID(data);
					navigate(`/game/${0}`);
				})
				.catch(console.error);
		}
	}, [playerID]);

	return null;
}
