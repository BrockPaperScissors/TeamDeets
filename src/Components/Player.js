import { useEffect } from 'react';

export default function Player({ gameDetails, setPlayerDetails }) {
	const playerArr = [];
	useEffect(() => {
		if (gameDetails) {
			for (let i = 0; i < 10; i++) {
				playerArr.push(gameDetails.info.participants[i]);
				setPlayerDetails(playerArr);
			}
		}
	}, [gameDetails]);

	return null;
}
