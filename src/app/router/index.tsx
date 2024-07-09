import { createBrowserRouter } from "react-router-dom";
import { ToDoPage } from "../../pages/ToDoPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoPage />,
  },
]);
