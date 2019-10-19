import React from 'react';
import SubmitButton from '../common/submitButton.js';

const InputMessageForm = (properties) => {
	return (
		<div className=" form pa4 ma2">
			<input
				name="message-input-field"
				type="text"
				placeholder="type-your-message-here"
				className="w-70 center ma4 pa4 f3 bg-light-pink"
			/>
			<SubmitButton />
		</div>
	);
};
export default InputMessageForm;
