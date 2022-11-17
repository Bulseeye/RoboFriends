import React from 'react';
import Card from './Card.js';

const CardList = ( {robots} ) => {
	/*const cardComponent = robots.map((user, i) => {
		return <Card id={ robots[i].id } name={ robots[i].name } email={ robots[i].email }/>
	})
*/	return (
		<React.StrictMode>
			{
				// {cardComponent}
				robots.map((user, i) => {
					return (
						<Card 
						key={i}
						id={ robots[i].id } 
						name={ robots[i].name } 
						email={ robots[i].email }
						/>
					);
				})
			}
		</React.StrictMode>
	);
}

export default CardList;