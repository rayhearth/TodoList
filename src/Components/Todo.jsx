import React from "react";
import { useDispatch } from "react-redux";
import { cancelTodos, changeTodoStatus } from "../feature/todo.slice";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const Todo = ({name}) => {
	

	return (
		<li className="todo stack-small">
					<div className="c-cb">
						<input id="todo-0" type="checkbox" name="todo-0" defaultChecked={true} />
						<label className="todo-label" htmlFor="todo-0">
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
