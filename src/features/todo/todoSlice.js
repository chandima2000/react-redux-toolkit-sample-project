import { createSlice, nanoid } from '@reduxjs/toolkit'


// Initial state
const initialState = {
    todos: [], //array
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{

        // Add Todo Reducer function
        addTodo: (state, action) => {
             const todo = {
                id: nanoid(),
                text: action.payload,
             }
             state.todos.push(todo) // push to the Store
        },

        // Delete Todo Reducer function
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)  
        },
    }
})

// Export every reducer function one by one
export const {addTodo, deleteTodo} = todoSlice.actions

// Export entire reducer
export default todoSlice.reducer