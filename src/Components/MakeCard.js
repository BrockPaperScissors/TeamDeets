import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MakeCard({ playerDetails, gameID, setGameDetails }) {
	const { index } = useParams();

	useEffect(() => {
		if (gameID) {
			const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${gameID[index]}?api_key=${process.env.REACT_APP_TEAM_KEY}`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setGameDetails(data);
				});
		}
	}, [gameID, index]);

	return (
		<div>
			<div className='card-box'>
				{playerDetails &&
					playerDetails.map((playerDetails) => (
						<div key={playerDetails.summonerId} className='card'>
							<header id='card-header'>
								<h1 id='sumName'>{playerDetails.summonerName}</h1>
								<h2 id='team'>Team: {playerDetails.teamId / 100}</h2>

								<img
									src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${
										playerDetails.championName === 'FiddleSticks'
											? 'Fiddlesticks'
											: playerDetails.championName
									}.png`}
									alt={`${playerDetails.championName}`}
									id='player-champ'
								/>
							</header>
							<main id='stats'>
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
										Gold Per Min:{' '}
										{Math.floor(
											playerDetails.goldEarned / (playerDetails.timePlayed / 60)
										)}
									</li>
								</ul>
							</main>
						</div>
					))}
			</div>
		</div>
	);
}
