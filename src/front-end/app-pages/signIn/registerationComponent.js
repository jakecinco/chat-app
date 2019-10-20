import React from 'react';

const RegisterComponent = ({ onRouteChange }) => {
	return (
		<div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			<p className="f2 dark-blue">Welcome to Just Chat App</p>
			<p className="f2 bg-light-pink pa3 br3">Register to start chatting!</p>
			<form>
				<fieldset id="register" className="ba b--transparent ph0 mh0" />
				<div className="mt3">
					<label className="db fw6 lh-copy f3" HTMLfor="username">
						Name
					</label>
					<input
						className="pa2 input-reset br3 ba bg-transparent hover-bg-light-yellow hover-black w-100"
						type="text"
						name="username"
						id="username"
					/>
				</div>
				<div className="mt3">
					<label className="db fw6 lh-copy f3" HTMLfor="email-address">
						Email
					</label>
					<input
						className="pa2 input-reset br3 ba bg-transparent hover-bg-light-yellow hover-black w-100"
						type="email"
						name="email-address"
						id="email-address"
					/>
				</div>
				<div className="mv3">
					<label className="db fw6 br3 lh-copy f3" HTMLfor="password">
						Password
					</label>
					<input
						className="b pa2 input-reset ba bg-transparent br3 hover-bg-light-yellow hover-black w-100"
						type="password"
						name="password"
						id="password"
					/>
				</div>
				<div class="">
					<input
						className="b ph3 pv2 input-reset ba b--dark-blue br3 bg-transparent grow pointer f3 dib shadow-5 bg-pink"
						type="submit-register"
						value="Register"
					/>
				</div>
				<div class="lh-copy mt3">
					<p
						onClick={() => onRouteChange('signinForm')}
						href="#0"
						className="f2 bg-light-blue link hover-bg-light-pink br3 pa2 ma1 shadow-5 grow dark-blue dib pointer"
					>
						Registered? Go to Sign-in!
					</p>
				</div>
			</form>
		</div>
	);
};
export default RegisterComponent;
