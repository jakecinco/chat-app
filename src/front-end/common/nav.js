import React from 'react';

const NavComponent = () => {
	return (
		<nav
			className="nav"
			style={{
				display: 'flex',
				justifyContent: 'flex-end'
			}}
		>
			<p className="f2 link bg-light-blue dim red underline pa3 pointer">Sign-Out</p>
			<hr />
			<p className="f2 link dim bg-light-blue red underline pa3 pointer">Log-In</p>
			<p className="f2 link dim bg-light-blue red underline pa3 pointer">Register</p>
		</nav>
	);
};

export default NavComponent;
