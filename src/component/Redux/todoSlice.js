import { createSlice } from "@reduxjs/toolkit"

const initialState = {items: [{id:1, todo:'Learn redux', isComlited: false}]}

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
       deleteTodo: (state, action) =>{
        state.items = state.items.filter(item=> item.id !== action.payload)
       },
       addTodo: (state, action) =>{
        state.items.push(action.payload)
       },
       editTodo: (state, action) => {
        //пробігтись по масиву і отримати новий тайтл
        const item = state.items.find(item => item.id === action.payload.id)
       if(item){ item.todo = action.payload.todo}

       },
    }
})



export const todosReducer = slice.reducer
export const {deleteTodo, addTodo, editTodo} = slice.actions









