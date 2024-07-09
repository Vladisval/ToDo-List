import { Box, TextField } from "@mui/material";

const SearchFilter = () => {

  return (
    <Box marginRight='1rem' flexBasis='85%'>
      <TextField id="outlined-basic" label="Search" variant="outlined" margin="none" size="small" fullWidth />
    </Box>
  );
};


export default SearchFilter;