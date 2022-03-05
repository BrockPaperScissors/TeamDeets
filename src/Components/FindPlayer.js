import React, { useEffect } from 'react';

export default function FindPlayer({ setPlayerID }) {
	let idInput = '';
	function getPlayerID() {
		const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${idInput}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPlayerID(data.puuid);
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
		<form onSubmit={handleSubmit} id='find-summoner'>
			<label htmlFor='summonerSearch' id='summoner-label'>
				Summoner Name:{' '}
			</label>
			<input type='text' id='summonerSearch' onChange={handleChange} />
			<button type='submit' id='search-button'>
				Find Summoner
			</button>
		</form>
	);
}
