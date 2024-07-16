// InputField.js
import React, { useState } from "react";

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		if (!value) {
			setIsFocused(false);
		}
	};

	return (
		<div className="input-wrapper">
			<label
				htmlFor={name}
				className={`input-label ${isFocused || value ? "focused" : ""}`}
			>
				{placeholder}
			</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				id={name}
				placeholder=""
			/>
		</div>
	);
};

export default InputField;
