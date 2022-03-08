import React, { useState } from 'react';

export default function FindPlayer({ setPlayerID }) {
	const [idInput, setIdInput] = useState('');
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
		setIdInput(e.target.value);
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
			<input
				type='text'
				id='summonerSearch'
				onChange={handleChange}
				required
				value={idInput}
			/>
			<button type='submit' id='search-button'>
				Find Summoner
			</button>
		</form>
	);
}
