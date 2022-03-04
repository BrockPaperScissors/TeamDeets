import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';

export default function GetGameID({ playerID, gameID }) {
	useEffect(() => {
		if (playerID) {
			const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerID}/ids?start=0&count=20&api_key=${process.env.REACT_APP_TEAM_KEY}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				})
				.catch(console.error);
		}
	}, [playerID]);

	console.log(playerID);

	return gameID;
}
