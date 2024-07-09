import { TodoModel } from "../model/types.ts";

interface Props {
  todo: TodoModel;
}

const ToDoItem = ({ todo }: Props) => {
  return <div>{todo.title}</div>;
};

export default ToDoItem;
