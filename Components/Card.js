import React from 'react';

const Card = ({id, name, email}) => {
	return (
		// dib = display inline block br = border radius 
		// pa = padding all, pl = padding left ph = padding horizontal, etc
		// ma = margin all, ml = margin left, etc
		// grow = animation
		<div className='tc bg-light-green dib br3 pa3 ma2 grow ba bw2 shadow-5'>
			<img alt='Robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;