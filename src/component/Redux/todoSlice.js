import { createSlice } from "@reduxjs/toolkit"

const initialState = {items: [{id:1, todo:'Learn redux', isComlited: false}]}

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        inkrement: (state, option )=> {
            state.todos ++
        }
    }
})



export const todosReducer = slice.reducer










