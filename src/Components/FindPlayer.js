import React from 'react';
import { useState, useEffect } from 'react';
export default function FindPlayer() {
	const [playerID, setPlayerID] = useState('');

	// useEffect(() => {
	// 	getPlayerID();
	// }, []);

	function getPlayerID() {
		const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerID}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPlayerID(data);
				console.log(data);
			})
			.catch(console.error);
	}

	function handleChange(e) {
		setPlayerID(e.target.value);
	}

	function handleSubmit(e) {
		console.log(playerID);
		e.preventDefault();
		getPlayerID();
		setPlayerID('');
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='summonerSearch'>Summoner Name: </label>
			<input type='text' id='summonerSearch' onChange={handleChange} />
			<button type='submit'>Find Summoner</button>
		</form>
	);
}
