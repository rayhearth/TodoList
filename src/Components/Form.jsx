import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setInputValue } from "../feature/todo.slice";
import { addListener } from "@reduxjs/toolkit";

const Form = ({allTasksCompleted}) => {
	const dispatch = useDispatch();
	const inputValue = useSelector((state) => state.todos.inputValue);

	const handleInputChange = (e) => {
		dispatch(setInputValue(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addTodo({
				id: Date.now(),
				name: inputValue,
				completed: false,
			})
		);
		dispatch(setInputValue("")); //reinit le champ de saisie
	};

	return (
		<form onSubmit={handleSubmit}>
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
        disabled={allTasksCompleted} // Désactiver l'entrée si toutes les tâches sont terminées
			/>
			<button type="submit" className="btn btn__primary btn__lg">
				Ajouter
			</button>
		</form>
	);
};

export default Form;
