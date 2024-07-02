import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../feature/todo.slice";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Todo = ({ name, completed, id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const inputRef = useRef(null);

  const handleStatusChange = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEditSubmit = () => {
    if (newName.trim() !== "") {
      dispatch(editTodo({ id, name: newName }));
    }
    setIsEditing(false);
  };

  // Function to handle outside click or touch
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      handleEditSubmit();
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSubmit();
    }
  };

  useEffect(() => {
    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchend", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <li className="todo stack-small">
      {isEditing ? (
        <div className="c-cb">
          <input
            ref={inputRef}
            id={id}
            type="text"
            value={newName}
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
            className="input input__lg"
          />
        </div>
      ) : (
        <>
          <div className="c-cb">
            <input
              id={id}
              type="checkbox"
              checked={completed}
              onChange={handleStatusChange}
            />
            <label
              className="todo-label"
              htmlFor={id}
              onClick={() => setIsEditing(true)}
              onTouchEnd={() => setIsEditing(true)}
            >
              {name}
            </label>
          </div>
          <div className="btn-group">
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