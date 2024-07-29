export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IParams {
  limit: number;
  page: number;
}

export interface ICreateTodo {
  textValue: string;
}
