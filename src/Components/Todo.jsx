import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../feature/todo.slice";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const Todo = ({ name, completed, id }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [newName, setNewName] = useState(name);

	const handleStatusChange = () => {
		dispatch(toggleTodo(id));
	};

	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handleEditSubmit = (e) => {
		e.preventDefault();
		dispatch(editTodo({ id, name: newName }));
		setIsEditing(false);
	};

	return (
		<li className="todo stack-small">
			{isEditing ? (
				<form onSubmit={handleEditSubmit} className="editing">
					<div className="c-cb">
						<input
							id={id}
							type="text"
							value={newName}
							onChange={handleNameChange}
							className="input input__lg"
						/>
					</div>
					<div className="btn-group">
						<button
							type="button"
							className="btn"
							onClick={() => setIsEditing(false)}
						>
							Annuler
						</button>
						<button type="submit" className="btn btn__primary">
							Sauvegarder
						</button>
					</div>
				</form>
			) : (
				<>
					<div className="c-cb">
						<input
							id={id}
							type="checkbox"
							checked={completed}
							onChange={handleStatusChange}
						/>
						<label className="todo-label" htmlFor={id}>
							{name}
						</label>
					</div>
					<div className="btn-group">
						<button
							type="button"
							className="btn small-btn"
							onClick={() => setIsEditing(true)}
						>
							<FiEdit3 />
						</button>
						<button
							type="button"
							className="btn small-btn btn__danger"
							onClick={handleDelete}
						>
							<MdOutlineDeleteSweep />
						</button>
					</div>
				</>
			)}
		</li>
	);
};
export default Todo;
