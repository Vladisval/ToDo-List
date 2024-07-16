import { createSlice } from "@reduxjs/toolkit";
import { IParams } from "./types.ts";

const initialState: IParams = {
  page: 1,
  limit: 10,
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  selectors: {
    getCurrentPage: (sliceState) => sliceState.page,
    getLimitValue: (sliceState) => sliceState.limit,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { incrementPage, changeLimit } = todoListSlice.actions;
export const { getCurrentPage, getLimitValue } = todoListSlice.selectors;

export default todoListSlice.reducer;
