import ToDoItem from "./ToDoItem.tsx";
import { todoApi } from "../model/api.ts";
import { Button } from "@mui/material";
import { useState } from "react";

export const ToDoList = () => {
  const [amount, setAmount] = useState(10);

  const { data } = todoApi.useTodoListQuery({
    limit: amount,
  });

  return (
    <>
      <div>
        {!!data?.length &&
          data.map((toDo) => <ToDoItem key={toDo.id} todo={toDo} />)}
      </div>
      <Button
        onClick={() => {
          setAmount((prev) => prev + 10);
        }}
      >
        More
      </Button>
    </>
    <div>
      {!!data?.length &&
        data.map((toDo) => <ToDoItem key={toDo.id} todo={toDo} />)}
    </div>
  );
};
