import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useInput } from "../model/useInput.ts";
import { setTitle } from "../model/filtersSlice.ts";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

const SearchFilter = () => {
  const input = useInput();
  const dispatch = useDispatch();

  return (
    <TextField
      sx={{ minWidth: "70%", marginRight: "2rem" }}
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
  );
};

export default SearchFilter;
