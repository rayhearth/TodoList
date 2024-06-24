import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const Form = ({ handleAddTodo, inputValue, setInputValue }) => {
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAddButtonClick = () => {
		handleAddTodo({ preventDefault: () => {} });
	};

	return (
		<form className="task" onSubmit={handleAddTodo}>
			<div className="input-wrapper">
				<button
					type="button"
					className="btn add-btn"
					onClick={handleAddButtonClick}
				>
					<IoMdAddCircleOutline />
				</button>
				<input
					type="text"
					id="new-todo-input"
					className="input input__lg"
					name="text"
					placeholder="Ajouter une nouvelle tâche"
					autoComplete="off"
					value={inputValue}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default Form;
