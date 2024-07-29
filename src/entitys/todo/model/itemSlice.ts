import { ICreateTodo } from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICreateTodo = {
  textValue: "",
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  selectors: {
    getTextValue: (sliceState) => sliceState.textValue,
  },
  reducers: {
    textValueChange: (state, action) => {
      state.textValue = action.payload;
    },
  },
});

export const { getTextValue } = itemSlice.selectors;
export const { textValueChange } = itemSlice.actions;

export default itemSlice.reducer;
