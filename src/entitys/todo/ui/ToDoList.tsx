import ToDoItem from "./ToDoItem.tsx";
import { todoApi } from "../model/api.ts";
import { Button, Container, LinearProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getLimitValue,
  incrementPage,
} from "../model/slice.ts";
import {
  getCompleted,
  getTitle,
} from "../../../features/filters/model/filtersSlice.ts";

export const ToDoList = () => {
  const page = useSelector(getCurrentPage);
  const limit = useSelector(getLimitValue);
  const dispatch = useDispatch();
  let { data } = todoApi.useTodoListQuery({ limit, page });
  const { isFetching } = todoApi.useTodoListQuery({ limit, page });
  const valueInput = useSelector(getTitle);
  const valueCompleted = useSelector(getCompleted);
  if (valueCompleted === "Completed") {
    data = data?.filter((toDo) => toDo.completed);
  }
  if (valueCompleted === "Uncompleted") {
    data = data?.filter((toDo) => !toDo.completed);
  }
  return (
    <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column" }}>
      {!!data?.length &&
        data
          ?.filter((toDo) =>
            toDo.title.toLowerCase().includes(valueInput.toLowerCase()),
          )
          .map((toDo) => <ToDoItem key={toDo.id} todo={toDo} />)}
      {isFetching && (
        <LinearProgress sx={{ marginTop: "3rem", height: "5px" }} />
      )}
      {!isFetching && data?.length && (
        <Button
          sx={{
            color: "white",
            fontSize: "15px",
            border: "1px solid white",
            width: "100%",
            height: "3rem",
            borderRadius: "5px",
            marginTop: "1rem",
          }}
          onClick={() => dispatch(incrementPage())}
        >
          More Todos
        </Button>
      )}
    </Container>
  );
};
