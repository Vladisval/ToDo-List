import Header from "./Header/ui/Header.tsx";
import ToDoList from "./ToDoList/ToDoList.tsx";
import { Box } from "@mui/material";

const ToDoPage = () => {
  return (
    <Box className="page" display="flex" flexDirection="column" gap="4" >
      <Header />
      <ToDoList />
    </Box>
  );
};

export default ToDoPage;