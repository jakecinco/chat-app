import React from 'react';

const NavComponent = () => {
	return (
		<nav
			className="nav bg-light-blue"
			style={{
				display: 'flex',
				justifyContent: 'flex-end'
			}}
		>
			<p className="f2 link bg-light-blue dim red underline pa3 pointer">Sign-Out</p>
			<hr />
			<p className="f2 link dim bg-light-blue dark-blue underline pa3 pointer">Log-In</p>
			<p className="f2 link dim bg-light-blue dark-green pa3 underline pointer">Register</p>
		</nav>
	);
};

export default NavComponent;
