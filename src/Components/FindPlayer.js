import React, { useState } from 'react';

export default function FindPlayer({ setPlayerID }) {
	const [idInput, setIdInput] = useState('');
	const [errors, setErrors] = useState('');
	function getPlayerID() {
		const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${idInput}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPlayerID(data.puuid);
				setErrors('');
			})
			.catch((error) => {
				console.error(error);
				setErrors('Invalid Summoner');
			});
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
			{errors ? <p>{errors}</p> : null}
			<button type='submit' id='search-button'>
				Find Summoner
			</button>
		</form>
	);
}
