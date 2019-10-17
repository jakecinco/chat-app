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
			<p className="f3 link dim red underline pa3 pointer">Sign In</p>
			<hr />
			<p className="f3 link dim red underline pa3 pointer">Register</p>
			<p className="f3 link dim red underline pa3 pointer">Sign Out</p>
		</nav>
	);
};

export default NavComponent;
