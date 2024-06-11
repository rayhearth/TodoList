import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo , setInputValue } from "../../feature/todo.slice";
import Todo from "../../Components/Todo";
import Form  from "../../Components/Form";
import FilterButton from "../../Components/FilterButton";

const Index = () => {
	const tasks = useSelector((state) => state.todos.todos);
  const inputValue = useSelector((state) => state.todos.inputValue);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      name: inputValue,
      comleted: false,
    };
    dispatch(addTodo(newTodo));
    dispatch(setInputValue(""));
  }

  const allTasksCompleted = tasks.every(task => task.completed);

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
      <Form 
      handleAddTodo= {handleAddTodo}
      inputValue= {inputValue}
      setInputValue={(value) => dispatch(setInputValue(value))}
      //allTasksCompleted={allTasksCompleted}
      />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{tasks.length} tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      {allTasksCompleted && <p>Toutes les tâches sont terminées!</p>}
    </div>
  );
};

export default Index;
