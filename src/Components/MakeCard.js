import React, { useEffect } from 'react';

export default function MakeCard({ gameDetails, playerDetails }) {
	useEffect(() => {
		if (playerDetails) {
			console.log(playerDetails);
			console.log();
		}
	}, [playerDetails]);

	return (
		<>
			<div className='card-box'>
				{playerDetails &&
					playerDetails.map((playerDetails) => (
						<div key={playerDetails.summonerId} className='card'>
							<h1>{playerDetails.summonerName}</h1>
							<ul id='KDR'>
								<li className='KDA'>Kills: {playerDetails.kills}</li>
								<li className='KDA'>Deaths: {playerDetails.deaths}</li>
								<li className='KDA'>Assists: {playerDetails.assists}</li>
							</ul>
							<h2>Team: {playerDetails.teamId / 100}</h2>
							<h3>{playerDetails.championName}</h3>
							<p>{playerDetails.individualPosition}</p>
						</div>
					))}
			</div>
		</>
	);
}
