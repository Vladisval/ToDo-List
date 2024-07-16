import { baseApi } from "../../../shared/api";
import { TodoModel } from "./types.ts";

export const todoApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    todoList: query<TodoModel[], number>({
      query: (pageNumber) => `/todos?_page=${pageNumber}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
  overrideExisting: true,
});
