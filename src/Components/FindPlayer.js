import { UserContext } from './UserContext';
import React, { useContext, useEffect } from 'react';

export default function FindPlayer() {
	const { playerID, setPlayerID } = useContext(UserContext);
	let idInput = '';
	function getPlayerID() {
		const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${idInput}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPlayerID(data.puuid);
				console.log(data);
				console.log(data.puuid);
			})
			.catch(console.error);
	}

	function handleChange(e) {
		idInput = e.target.value;
	}

	function handleSubmit(e) {
		e.preventDefault();
		getPlayerID();
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='summonerSearch'>Summoner Name: </label>
			<input type='text' id='summonerSearch' onChange={handleChange} />
			<button type='submit'>Find Summoner</button>
		</form>
	);
}
