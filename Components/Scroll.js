import React from 'react';
// import './Scroll.css';

const Scroll = (props) => {
	return (
		// you can also do div style={{ overflow: 'scroll', border: '1px solid black', height: '800px' }}
		<div style={{ overflow: 'scroll', border: '1px solid black', height: '800px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;