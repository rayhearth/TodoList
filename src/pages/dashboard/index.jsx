import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../feature/todo.slice";
import Todo from "../../Components/Todo";
import { Form } from "react-router-dom";
import FilterButton from "../../Components/FilterButton";

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

	const allTaksCompleted = tasks.every(task => task.completed);

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
			<Form/>
			<div className="filters btn-group stack-exception">
				<FilterButton/>
				<FilterButton/>
				<FilterButton/>
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
