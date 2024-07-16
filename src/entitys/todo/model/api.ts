import { baseApi } from "../../../shared/api";
import { IParams, TodoModel } from "./types.ts";

export const todoApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    todoList: query<TodoModel[], IParams>({
      query: ({ limit, page }) => `/todos?_limit=${limit}&page=${page}`,
    }),
  }),
  overrideExisting: true,
});
