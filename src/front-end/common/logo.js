import React from 'react';
import Tilt from 'react-tilt';
// import chatLogo from '../front-end/assets/background-cover.jpg';

const LogoComponent = () => {
	return (
		<div className="ma1">
			<Tilt className="Tilt br2 shadow-2 shadow-1 ba yellow" options={{ max: 75 }}>
				<div className="Tilt-inner paddingTop:'5px">
					<i className="fas fa-headset ma1 mt1 f1 " />
				</div>
			</Tilt>
		</div>
	);
};

export default LogoComponent;
