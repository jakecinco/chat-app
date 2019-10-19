import React from 'react';
const LoginComponent = () => {
	return (
		<div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			<form>
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
				<div className="mt3">
					<label className="db fw6 lh-copy f3" for="email-address">
						Email
					</label>
					<input
						className="pa2 input-reset ba bg-transparent hover-bg-light-yellow hover-white w-100"
						type="email"
						name="email-address"
						id="email-address"
					/>
				</div>
				<div className="mv3">
					<label className="db fw6 lh-copy f3" for="password">
						Password
					</label>
					<input
						className="b pa2 input-reset ba bg-transparent hover-bg-light-yellow hover-white w-100"
						type="password"
						name="password"
						id="password"
					/>
				</div>
				<div class="">
					<input
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
						type="submit"
						value="Sign in"
					/>
				</div>
				<div class="lh-copy mt3">
					<a href="#0" className="f3 link hover-bg-yellow grow dark-blue dib pointer">
						Not yet registered? Sign-up to use JustChat
					</a>
				</div>
			</form>
		</div>
	);
};
export default LoginComponent;
