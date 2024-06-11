import React from "react";


const Form = ({handleAddTodo, inputValue, setInputValue}) => {
	

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};


	return (
		<form onSubmit={handleAddTodo}>
			<h2 className="label-wrapper">
				<label htmlFor="new-todo-input" className="label__lg">
					Qu'y a-t-il à faire&nbsp;?
				</label>
			</h2>
			<input
				type="text"
				id="new-todo-input"
				className="input input__lg"
				name="text"
				autoComplete="off"
				value= {inputValue}
				onChange={handleChange}
			/>
			<button type="submit" className="btn btn__primary btn__lg">
				Ajouter
			</button>
		</form>
	);
};

export default Form;
