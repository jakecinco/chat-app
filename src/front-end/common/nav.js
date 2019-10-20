import React from 'react';
import LogoComponent from './logo';

const NavComponent = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<div>
				<nav
					className="bg-light-blue"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<LogoComponent />
					<p
						onClick={() => onRouteChange('signinForm')}
						className="f2 link dim bg-light-blue red underline ma1 pointer"
					>
						Sign-Out
					</p>
				</nav>
			</div>
		);
	} else {
		return (
			<div>
				<nav
					className="bg-light-blue"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<LogoComponent />
				</nav>
			</div>
		);
	}
};

export default NavComponent;
