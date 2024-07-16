import { Box, TextField } from "@mui/material";
import { useInput } from "../model/useInput.ts";

const SearchFilter = () => {
  const input = useInput();
  return (
    <Box marginRight="1rem" flexBasis="85%">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        margin="none"
        size="small"
        fullWidth
        {...input}
      />
    </Box>
  );
};

export default SearchFilter;
