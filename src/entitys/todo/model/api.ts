import { baseApi } from "../../../shared/api";
import { TodoModel } from "./types.ts";

export const todoApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    todoList: query<TodoModel[], void>({
      query: () => ({
        url: "/todos",
      }),
    }),
  }),
  overrideExisting: true,
});
