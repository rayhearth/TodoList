import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../feature/todo.slice";


const Todo = ({name, completed, id}) => {

	const dispatch = useDispatch();

    const handleStatus = () => {
        dispatch(toggleTodo(id)); // Utilisez l'id correct
    };

    const handleDelete = () => {
        dispatch(deleteTodo(id)); // Utilisez l'id correct
    };
	
	return (
		<li className="todo stack-small">
					<div className="c-cb">
						<input id={id} type="checkbox" name={id} defaultChecked={completed} />
						<label className="todo-label" htmlFor={id}>
							{name}
						</label>
					</div>
					<div className="btn-group">
						<button type="button" className="btn">
							Éditer <span className="visually-hidden">Manger</span>
						</button>
						<button type="button" className="btn btn__danger">
							Supprimer <span className="visually-hidden">Manger</span>
						</button>
					</div>
				</li>
	);
};

export default Todo;
