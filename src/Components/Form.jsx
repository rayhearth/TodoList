import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const Form = ({ handleAddTodo, inputValue, setInputValue }) => {
	const handleChange = (e) => {
		console.log("say hello");
		setInputValue(e.target.value);
	};

	return (
		<form className="task" onSubmit={handleAddTodo}>
			<label htmlFor="new-todo-input" className="label__lg"></label>
			<input
				type="text"
				id="new-todo-input"
				className="input input__lg"
				name="text"
				autoComplete="off"
				value={inputValue}
				onChange={handleChange}
			/>
			<button type="button" className="btn" onClick={handleChange}>
				<IoMdAddCircleOutline />
			</button>
		</form>
	);
};

export default Form;
