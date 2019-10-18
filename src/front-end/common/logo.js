import React from 'react';
import Tilt from 'react-tilt';

const LogoComponent = () => {
	return (
		<div className="ma1">
			<Tilt className="Tilt br1 shadow-1 ba red" options={{ max: 25 }}>
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
