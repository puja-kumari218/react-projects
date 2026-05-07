import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
    todos : [{id:1, text:"hello world"}],
};

export const todoSlice = createSlice({
    name:'todo',
   intialState,
    reducers:{
        addTodo:(state, action) => {
            console.log(action)
            const todo ={
                id: nanoid(),
                text:action.payload
            };
            state.todos.push(todo);
        },
        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },

})
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;