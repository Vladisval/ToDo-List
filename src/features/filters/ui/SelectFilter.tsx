import { Box, FormControl, MenuItem, Select } from "@mui/material";

const SelectFilter = () => {
  return (
    <Box>
      <FormControl sx={{ minWidth: 100 }}>
        <Select value={"All"} displayEmpty size="small">
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Completed"}>Complete</MenuItem>
          <MenuItem value={"Uncompleted"}>Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
