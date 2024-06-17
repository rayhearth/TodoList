import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/user.slice'
import todoReducer from '../feature/todo.slice'

const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todoReducer,
    }
})

export default store;