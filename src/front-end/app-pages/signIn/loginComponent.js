import React from 'react';
const LoginComponent = ({ onRouteChange }) => {
	return (
		<div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			<p className="f2 dark-blue underline">Sign-In</p>
			<form>
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
				<div className="mt3">
					<label className="db fw6 lh-copy f3" for="email-address">
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
					<label className="db fw6 br3 lh-copy f3" for="password">
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
						onClick={() => onRouteChange('userloggedin')}
						className="b ph3 pv2 input-reset ba b--dark-blue br3 bg-transparent grow pointer f3 dib shadow-5 bg-yellow"
						type="submit"
						value="Sign in"
					/>
				</div>
				<div class="lh-copy mt3">
					<a
						href="#0"
						className="f3 bg-light-blue link hover-bg-yellow br3 pa2 ma1 shadow-5 grow dark-blue dib pointer"
					>
						Not yet registered? Click here to sign-up!
					</a>
				</div>
			</form>
		</div>
	);
};
export default LoginComponent;
