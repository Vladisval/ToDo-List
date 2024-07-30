import { ICreateTodo } from "./types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICreateTodo = {
  textValue: "",
  isOpeningUpdateModal: false,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  selectors: {
    getTextValue: (sliceState) => sliceState.textValue,
    getIsOpeningUpdateModal: (sliceState) => sliceState.isOpeningUpdateModal,
  },
  reducers: {
    textValueChange: (state, action) => {
      state.textValue = action.payload;
    },
    toggleOpenModal: (state, action) => {
      state.isOpeningUpdateModal = action.payload;
    },
  },
});

export const { getTextValue, getIsOpeningUpdateModal } = itemSlice.selectors;
export const { textValueChange, toggleOpenModal } = itemSlice.actions;

export default itemSlice.reducer;
