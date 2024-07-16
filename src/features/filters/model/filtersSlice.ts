import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    title: "",
    completed: "All",
  },
  selectors: {
    getCompleted: (state) => state.completed,
    getTitle: (state) => state.title,
  },
  reducers: {
    changeCompleted: (state, action) => {
      state.completed = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { changeCompleted, setTitle } = filtersSlice.actions;
export const { getCompleted, getTitle } = filtersSlice.selectors;
export default filtersSlice.reducer;
