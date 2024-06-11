import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setInputValue } from "../../feature/todo.slice";
import Todo from "../../Components/Todo";
import Form from "../../Components/Form";
import FilterButton from "../../Components/FilterButton";

const FILTER_MAP = {
	All: () => true,
	Active: (task) => !task.completed,
	Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Index = () => {
	const tasks = useSelector((state) => state.todos.todos);
	const [filter, setFilter] = useState("All");
	const inputValue = useSelector((state) => state.todos.inputValue);
	const dispatch = useDispatch();

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (inputValue.trim() === "") return;
		const newTodo = {
			id: Date.now(),
			name: inputValue,
			completed: false,
		};
		dispatch(addTodo(newTodo));
		dispatch(setInputValue(""));
	};

	const allTasksCompleted = tasks.every((task) => task.completed);

	const filteredTasks = tasks.filter(FILTER_MAP[filter]);

	const taskList = filteredTasks.map((task) => (
		<Todo
			key={task.id}
			id={task.id}
			name={task.name}
			completed={task.completed}
		/>
	));

	const filterList = FILTER_NAMES.map((name) => (
		<FilterButton key={name} name={name} setFilter={setFilter} />
	));

	const remainingTasks = tasks.filter((task) => !task.completed).length;

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<Form
				handleAddTodo={handleAddTodo}
				inputValue={inputValue}
				setInputValue={(value) => dispatch(setInputValue(value))}
			/>
			<div className="filters btn-group stack-exception">{filterList}</div>
			<h2 id="list-heading">
				{remainingTasks}{" "}
				{remainingTasks === 1 ? "tâche restante" : "tâches restantes"}
			</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				{taskList}
			</ul>
			{allTasksCompleted && <p>Toutes les tâches sont terminées!</p>}
		</div>
	);
};

export default Index;
