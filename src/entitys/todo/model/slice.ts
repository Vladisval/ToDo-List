import { createSlice } from "@reduxjs/toolkit";
import { TState } from "./types.ts";

const initialState: TState = {
  page: 1,
  limit: 120,
  textValue: "",
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  selectors: {
    getCurrentPage: (sliceState) => sliceState.page,
    getLimitValue: (sliceState) => sliceState.limit,
    getTextValue: (sliceState) => sliceState.textValue,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
    textValueChange: (state, action) => {
      state.textValue = action.payload;
    },
  },
});

export const { incrementPage, changeLimit, textValueChange } =
  todoListSlice.actions;
export const { getCurrentPage, getLimitValue, getTextValue } =
  todoListSlice.selectors;

export default todoListSlice.reducer;
