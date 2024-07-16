import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  selectors: {
    getCurrentPage: (sliceState) => sliceState.page,
  },
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
  },
});

export const { increment } = todoListSlice.actions;
export const { getCurrentPage } = todoListSlice.selectors;

export default todoListSlice.reducer;
