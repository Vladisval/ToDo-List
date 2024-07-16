import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ToDoList } from "../entitys/todo/ui/ToDoList.tsx";
import { useInput } from "../features/filters/search/model/useInput.ts";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCompleted,
  getCompleted,
  setTitle,
} from "../features/filters/search/model/filtersSlice.ts";

export const ToDoPage = () => {
  const input = useInput();
  const dispatch = useDispatch();
  const valueCompleted = useSelector(getCompleted);
  return (
    <Box
      sx={{
        padding: "2rem",
      }}
    >
      <Typography variant="h3" align="center">
        TO DO LIST
      </Typography>
      <Box display="flex" justifyContent="space-between" margin="2rem auto">
        <Box marginRight="1rem" flexBasis="85%">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            margin="none"
            size="medium"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="large"
                    aria-label="toggle password visibility"
                    onClick={() => {
                      dispatch(setTitle(input.value));
                    }}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...input}
          />
        </Box>
        <Box>
          <FormControl sx={{ minWidth: 100 }}>
            <Select
              value={valueCompleted}
              displayEmpty
              size="medium"
              onChange={(e) => dispatch(changeCompleted(e.target.value))}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Completed"}>Complete</MenuItem>
              <MenuItem value={"Uncompleted"}>Incomplete</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <ToDoList />
    </Box>
  );
};
