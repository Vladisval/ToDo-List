import { createBrowserRouter } from "react-router-dom";
import ToDoPage from "../../pages/toDoPage/ToDoPage.tsx";

export const router = createBrowserRouter([{path: '/', element: <ToDoPage/>}])