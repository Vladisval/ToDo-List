import ToDoItem from "./ToDoItem.tsx";
import { todoApi } from "../model/api.ts";

export const ToDoList = () => {
  const { data } = todoApi.useTodoListQuery();

  return (
    <div>
      {!!data?.length &&
        data.map((toDo) => <ToDoItem key={toDo.id} todo={toDo} />)}
    </div>
  );
};
