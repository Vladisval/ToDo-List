import { FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted, getCompleted } from "../model/filtersSlice.ts";

const SelectCompletedFilter = () => {
  const dispatch = useDispatch();
  const valueCompleted = useSelector(getCompleted);

  return (
    <FormControl sx={{ minWidth: "12%", marginRight: "2rem" }}>
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
  );
};

export default SelectCompletedFilter;
