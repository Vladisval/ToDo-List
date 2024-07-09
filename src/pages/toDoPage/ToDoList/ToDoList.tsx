import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ContentToDoList from "./ui/ContentToDoList.tsx";

const ToDoList = () => {
  return (
    <Box className="gPage" display='flex' justifyContent='center'>
      <ContentToDoList />
      <Box display='flex' alignItems='flex-end' justifyContent='flex-end'>
        <Fab color="info" aria-label="add">
          <AddIcon/>
        </Fab>
      </Box>

    </Box>
  );
};

export default ToDoList;