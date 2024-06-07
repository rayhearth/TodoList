import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../feature/todo.slice";


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
        <form onSubmit={handleEditSubmit}>
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
            <button type="button" className="btn" onClick={() => setIsEditing(false)}>
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
            <input id={id} type="checkbox" checked={!!completed} onChange={handleStatusChange} />
            <label className="todo-label" htmlFor={id}>
              {name}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn" onClick={() => setIsEditing(true)}>
              Éditer <span className="visually-hidden">{name}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={handleDelete}>
              Supprimer <span className="visually-hidden">{name}</span>
            </button>
          </div>
        </>
      )}
    </li>
  );
};
export default Todo;
