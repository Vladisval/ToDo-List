import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api";
import pageCountReducer from "../../entitys/todo/model/slice.ts";
import filtersReducer from "../../features/filters/model/filtersSlice.ts";
import itemReducer from "../../entitys/todo/model/itemSlice.ts";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todoList: pageCountReducer,
    filters: filtersReducer,
    item: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
