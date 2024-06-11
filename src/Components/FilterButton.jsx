import React from "react";

const FilterButton = ({ name, setFilter, isPressed }) => {
	const handleClick = () => {
		setFilter(name);
	};

	return (
		<button
			type="button"
			className="btn toggle-btn"
			aria-pressed={isPressed}
			onClick={handleClick}
		>
			{name}
		</button>
	);
};

export default FilterButton;
