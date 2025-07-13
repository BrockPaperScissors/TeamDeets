import React, { useState } from "react";

export default function FindPlayer({ setPlayerID }) {
	const [idInput, setIdInput] = useState("");
	const [errors, setErrors] = useState("");

	function getPlayerID() {
		let idFormatted = idInput.split("#");

		console.log(idFormatted);
		if (idFormatted.length > 1) {
			const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${idFormatted[0]}/${idFormatted[1]}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setPlayerID(data.puuid);
					setErrors("");
				})
				.catch((error) => {
					console.error(error);
					setErrors("Invalid Summoner");
				});
		}
	}

	function handleChange(e) {
		setIdInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		getPlayerID();
	}

	return (
		<form onSubmit={handleSubmit} id="find-summoner">
			<label htmlFor="summonerSearch" id="summoner-label">
				Summoner Name:{" "}
			</label>
			<input
				type="text"
				id="summonerSearch"
				onChange={handleChange}
				required
				value={idInput}
			/>
			{errors ? <p id="error-message">{errors}</p> : null}
			<button type="submit" id="search-button">
				Find Summoner
			</button>
		</form>
	);
}
