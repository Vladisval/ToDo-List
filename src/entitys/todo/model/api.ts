import { baseApi } from "../../../shared/api";
import { IParams, TodoModel } from "./types.ts";

export const todoApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    todoList: query<TodoModel[], IParams>({
      query: ({ limit, page }) => `/todos?_per_page=${limit}&_page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todo", id }) as const),
              { type: "Todo", id: "LIST" },
            ]
          : [{ type: "Todo", id: "LIST" }],
      transformResponse(response: { data: TodoModel[] }) {
        return response.data;
      },
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
      invalidatesTags: (...arg) => [{ type: "Todo", id: arg[2].id }],
    }),
    updateTitle: mutation<TodoModel, TodoModel>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    removeTodo: mutation<TodoModel, TodoModel>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "DELETE",
        body: todo,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});
