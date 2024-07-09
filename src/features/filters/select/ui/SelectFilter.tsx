import { Box, FormControl, MenuItem, Select } from "@mui/material";

const SelectFilter = () => {
  return (
    <Box>
      <FormControl sx={{ minWidth: 100 }}>
        <Select
          value={10}
          displayEmpty
          size='small'
        >

          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Complete</MenuItem>
          <MenuItem value={30}>Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;