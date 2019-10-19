import React from 'react';
import Tilt from 'react-tilt';

const LogoComponent = () => {
	return (
		<div className="ma6">
			<Tilt className="Tilt br1 tc" options={{ max: 25 }}>
				<div className="Tilt-inner">
					<p className="f2 link dib grow bg-light-blue tc yellow underline pa3 pointer">
						<i className="fas fa-headset ma3 mt3 shadow-1 f1" />JUST CHAT APP
					</p>
				</div>
			</Tilt>
		</div>
	);
};

export default LogoComponent;
