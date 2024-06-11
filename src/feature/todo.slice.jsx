import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{ id: 1, name: "Create a todolist", completed: false },
		{ id: 2, name: "update a todolist", completed: true },
		{ id: 3, name: "delete todos", completed: true },
	],
	inputValue: "",
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setInputValue: (state, action) => {
			state.inputValue = action.payload;
		},
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		toggleTodo: (state, action) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		editTodo: (state, action) => {
			const { id, name } = action.payload;
			const todo = state.todos.find((todo) => todo.id === id);
			if (todo) {
				todo.name = name;
			}
		},
	},
});

export const { setInputValue, addTodo, toggleTodo, deleteTodo, editTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
