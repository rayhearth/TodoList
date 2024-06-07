import React from "react";

const FilterButton = () => {
	return (
		<button type="button" className="btn toggle-btn" aria-pressed="true">
			<span className="visually-hidden">Montrer </span>
			<span>Toutes</span>
			<span className="visually-hidden"> les tâches</span>
		</button>
	);
};

export default FilterButton;
