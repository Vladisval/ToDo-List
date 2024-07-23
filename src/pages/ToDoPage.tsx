import { Box, Container, Typography } from "@mui/material";
import { ToDoList } from "../entitys/todo/ui/ToDoList.tsx";
import CreateToDo from "../entitys/todo/ui/CreateToDo.tsx";
import SearchFilter from "../features/filters/ui/SearchFilter.tsx";
import SelectCompletedFilter from "../features/filters/ui/SelectCompletedFilter.tsx";
import SelectValueItemsFilter from "../features/filters/ui/SelectValueItemsFilter.tsx";

export const ToDoPage = () => {
  return (
    <Container
      sx={{
        padding: "2rem",
      }}
    >
      <Typography variant="h3" align="center">
        TO DO LIST
      </Typography>
      <Box display="flex" justifyContent="space-between" margin="2rem 0">
        <SearchFilter />
        <SelectCompletedFilter />
        <SelectValueItemsFilter />
      </Box>
      <ToDoList />
      <CreateToDo />
    </Container>
  );
};
