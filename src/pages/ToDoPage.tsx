import { Box, Typography } from "@mui/material";
import { ToDoList } from "../entitys/todo/ui/ToDoList.tsx";

export const ToDoPage = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
      }}
    >
      <Typography variant="h3" align="center">
        TO DO LIST
      </Typography>

      <ToDoList />
    </Box>
  );
};
