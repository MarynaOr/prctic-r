import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  step: 1,
  blacklist: ["step"]
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inkrement: (state, action) => {
      state.counter += state.step;
    },
    dekrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) =>{
        state.step = action.payload
    }
  },
});

export const counterReducer = slice.reducer;
export const { inkrement, dekrement, reset, changeStep } = slice.actions;
