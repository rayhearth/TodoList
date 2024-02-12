import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelTodos, changeTodoStatus } from '../feature/todo.slice';
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const Todo = ({ todo, handleEdit }) => {

  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  const handleDelete = () => {
    console.log("hello");
    dispatch(cancelTodos(todo.id))
  };

  return (
    <li className='todo-container'>
      <input type="checkbox"
      checked= {todo.status === "complete"}
      onChange={handleStatus}
      />
      <p className={`${todo.status === "complete" ? "disabled" : ""}`}>{todo.text}
      </p>
      <div className="edit">
        <button onClick={(e) => handleEdit(todo.id)}><FiEdit3 /></button>
        <button 
        onClick={() => handleDelete(todo.id)}
        ><MdOutlineDeleteSweep /></button>
      </div>

      
    </li>
  );
};

export default Todo;