import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../feature/todo.slice";
import { MdOutlineDeleteSweep } from "react-icons/md";
import useOutsideClick from "../hooks/useOutsideClick";

const Todo = ({ name, completed, id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const inputRef = useRef(null);
  const labelRef = useRef(null);

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
    if (newName.trim() !== "") {
      dispatch(editTodo({ id, name: newName }));
    } else {
      setNewName(name);
    }
    setIsEditing(false);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSubmit(e);
    }
  };

  useOutsideClick(inputRef, () => {
    if (isEditing) {
      handleEditSubmit({ preventDefault: () => {} });
    }
  });

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleLabelKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsEditing(true);
    }
  };

  return (
    <li className="todo stack-small">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="editing">
          <div className="c-cb">
            <input
              ref={inputRef}
              id={`edit-${id}`}
              type="text"
              value={newName}
              onChange={handleNameChange}
              onKeyDown={handleKeyDown}
              className="input input__lg"
              aria-label={`Edit task ${name}`}
            />
          </div>
        </form>
      ) : (
        <>
          <div className="c-cb">
            <input
              id={`toggle-${id}`}
              type="checkbox"
              checked={completed}
              onChange={handleStatusChange}
              aria-label={`Mark ${name} as completed`}
            />
            <label
              ref={labelRef}
              className="todo-label"
              htmlFor={`toggle-${id}`}
              tabIndex={0}
              onClick={() => setIsEditing(true)}
              onKeyDown={handleLabelKeyDown}
            >
              {name}
            </label>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn small-btn btn__danger"
              onClick={handleDelete}
              aria-label={`Delete ${name}`}
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
