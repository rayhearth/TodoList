import React from "react";

const FilterButton = ({ name, setFilter }) => {
	const handleClick = () => {
		setFilter(name);
	};

	return (
		<button
			type="button"
			className="btn toggle-btn"
			aria-pressed="true"
			onClick={handleClick}
		>
			{name}
		</button>
	);
};

export default FilterButton;
