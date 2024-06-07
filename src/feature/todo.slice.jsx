import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: 1, name: "Create a todolist", completed: "false" },
	{ id: 2, name: "update a todolist", completed: "true" },
	{ id: 3, name: "delete todos", completed: "true" },
];

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		toggleTodo: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
