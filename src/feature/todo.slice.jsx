import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		// { id: 1, tex: "Create a todolist", status: "incomplete" },
		// { id: 2, tex: "update a todolist", status: "incomplete" },
		// { id: 3, tex: "delete todos", status: "incomplete" },
	],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			const newTodo = action.payload;
			state.todos.push(newTodo);
		},
		editTodos: (state, action) => {
			const { id, text } = action.payload;
			const existingTodo = state.todos.find((todo) => todo.id === id);
			if (existingTodo) {
				existingTodo.text = text;
			}
		},
		cancelTodos: (state, action) => {
			const id = action.payload;
			state.todos = state.todos.filter((todo) => todo.id !== id);
		},
		changeTodoStatus: (state, action) => {
			const id = action.payload;
			const existingTodo = state.todos.find((todo) => todo.id === id);
			if (existingTodo.status == "incomplete") {
				existingTodo.status = "complete";
			} else {
				existingTodo.status = "incomplete";
			}
		},
	},
});

export const { addTodos, editTodos, cancelTodos, changeTodoStatus } =	todoSlice.actions;
export default todoSlice.reducer;
