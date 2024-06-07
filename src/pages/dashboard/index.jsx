import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../feature/todo.slice";
import Todo from "../../Components/Todo";

const Index = () => {
	const tasks = useSelector((state) => state.todos);

	const dispatch = useDispatch();
	const [newTodoName, setNewTodoName] = useState("");

	const handleAddTodo = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			name: newTodoName,
			completed: false,
		};
		dispatch(addTodo(newTodo));
		setNewTodoName("");
	};

	const taskList = tasks.map((task) => (
		<Todo
			key={task.id}
			id={task.id}
			name={task.name}
			completed={task.completed}
		/>
	));

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<form>
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
				/>
				<button type="submit" className="btn btn__primary btn__lg">
					Ajouter
				</button>
			</form>
			<div className="filters btn-group stack-exception">
				<button type="button" className="btn toggle-btn" aria-pressed="true">
					<span className="visually-hidden">Montrer </span>
					<span>Toutes</span>
					<span className="visually-hidden"> les tâches</span>
				</button>
				<button type="button" className="btn toggle-btn" aria-pressed="false">
					<span className="visually-hidden">Montrer </span>
					<span className="visually-hidden">les tâches </span>
					<span>Actives</span>
				</button>
				<button type="button" className="btn toggle-btn" aria-pressed="false">
					<span className="visually-hidden">Montrer </span>
					<span className="visually-hidden">les tâches </span>
					<span>Terminées</span>
				</button>
			</div>
			<h2 id="list-heading">3 tâches restantes</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				{taskList}
			</ul>
		</div>
	);
};

export default Index;
