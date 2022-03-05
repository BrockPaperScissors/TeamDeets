import React, { useEffect } from 'react';

let team1 = [];
let team2 = [];
export default function MakeCard({ gameDetails, playerDetails }) {
	useEffect(() => {
		if (playerDetails) {
			console.log(playerDetails);
			console.log(playerDetails[0].teamId);
			// // for (let i = 0; i < 10; i++) {
			// // 	if (playerDetails[i].teamId === 100) {
			// // 		team1.push(playerDetails[i]);
			// // 	} else {
			// // 		team2.push(playerDetails[i]);
			// // 	}
			// }
		}
	}, [playerDetails]);

	return (
		<div>
			<div className='card-box'>
				{playerDetails &&
					playerDetails.map((playerDetails) => (
						<div key={playerDetails.summonerId} className='card'>
							<header id='card-header'>
								<h1 id='sumName'>{playerDetails.summonerName}</h1>
								<h2>Team: {playerDetails.teamId / 100}</h2>
								<h3>{playerDetails.championName}</h3>
							</header>
							<ul id='KDR'>
								<li className='KDA'>Kills: {playerDetails.kills}</li>
								<li className='KDA'>Deaths: {playerDetails.deaths}</li>
								<li className='KDA'>Assists: {playerDetails.assists}</li>
								<li className='KDA'>
									Minions Killed:{' '}
									{playerDetails.totalMinionsKilled +
										playerDetails.neutralMinionsKilled}
								</li>
								<li className='KDA'>Gold: {playerDetails.goldEarned}</li>
								<li className='KDA'>
									Gold Per Minute:{' '}
									{Math.floor(
										playerDetails.goldEarned / (playerDetails.timePlayed / 60)
									)}
								</li>
							</ul>
						</div>
					))}
			</div>
			{/* <div className='card-box'>
				{team1 &&
					team1.map((team1) => (
						<div key={team1.summonerId} className='card'>
							<h1>{team1.summonerName}</h1>
							<ul id='KDR'>
								<li className='KDA'>Kills: {team1.kills}</li>
								<li className='KDA'>Deaths: {team1.deaths}</li>
								<li className='KDA'>Assists: {team1.assists}</li>
							</ul>
							<h2></h2>
							<h3></h3>
						</div>
					))} */}
			<div>Hello</div>
		</div>
	);
}
