import { baseApi } from "../../../shared/api";
import { IParams, TodoModel } from "./types.ts";

export const todoApi = baseApi.injectEndpoints({
  tagTypes: ["Todo"],
  endpoints: ({ query, mutation }) => ({
    todoList: query<TodoModel[], IParams>({
      query: ({ limit, page }) => `/todos?_limit=${limit}&_page=${page}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todo", id }) as const),
              { type: "Todo", id: "LIST" },
            ]
          : [{ type: "Todo", id: "LIST" }],
    }),
    createTodo: mutation<TodoModel, TodoModel>({
      query: ({ title, completed = false }) => ({
        url: "/todos",
        method: "POST",
        body: { title, completed },
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    toggleCompleted: mutation<TodoModel, TodoModel>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
  }),

  overrideExisting: true,
});
