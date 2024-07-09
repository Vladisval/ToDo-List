import ToDoItem from "./ToDoItem.tsx";
import { useEffect, useState } from "react";
import { TodoModel } from "../model/types.ts";

export const ToDoList = () => {
  const [toDoList, setToDoList] = useState<TodoModel[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setToDoList(json));
  }, []);

  return (
    <div>
      {!!toDoList.length &&
        toDoList.map((toDo) => <ToDoItem key={toDo.id} todo={toDo} />)}
    </div>
  );
};
