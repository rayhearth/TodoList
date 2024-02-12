import React from "react";
import Todo from "../Components/Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, cancelTodos } from "../feature/todo.slice";
import { BsPlusCircle } from "react-icons/bs";

const Dashboard = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	const [text, setText] = useState("");

	const handleAdd = () => {
		if (text === "") {
			return;
		}

		dispatch(
			addTodos({
				id: Math.floor(Math.random() * 1000),
				text,
				status: "incomplete",
			})
		);
		setText("");
	};

	const handleEdit = (id) => {
		const existingTodo = todos.find((todo) => todo.id === id);

		setText(existingTodo.text);
		dispatch(cancelTodos(id));
	};

	return (
		<div>
			<section className="todo">
				<h2>To do</h2>
				<div className="todolist">
					<ul className="list">
						{todos.map((todo, index) => (
							<Todo key={index} todo={todo} handleEdit={handleEdit} />
						))}
					</ul>
					<div className="add">
						<button onClick={handleAdd}>
							<BsPlusCircle />
						</button>
						<input
							type="text"
							value={text}
							placeholder="Ajouter une tâche"
							minLength="2"
							onChange={(e) => setText(e.target.value)}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
