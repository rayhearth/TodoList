import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelTodos, changeTodoStatus } from '../feature/todo.slice';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const Todo = ({ todo, handleEdit }) => {

  const dispatch = useDispatch();

  const handleStatus = () => {
    console.log('coc');
    dispatch(changeTodoStatus(todo.id));
  };

  const handleDelete = () => {
    dispatch(cancelTodos(todo.id))
  };

  return (
    <li className='todo-container'>
      <button onClick={() => handleStatus(todo.id)}><RiCheckboxBlankCircleLine /></button>
      <p className={`${todo.status === "complete"}`}>{todo.text}
      </p>
      <div className="edit">
        <button onChange={() => handleEdit(todo.id)}>+</button>
        <button onChange={() => handleDelete(todo.id)}>/</button>
      </div>

      
    </li>
  );
};

export default Todo;