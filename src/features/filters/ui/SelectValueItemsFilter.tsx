import { FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLimit,
  getLimitValue,
} from "../../../entitys/todo/model/slice.ts";

const SelectValueItemsFilter = () => {
  const dispatch = useDispatch();
  const limitValue = useSelector(getLimitValue);

  return (
    <FormControl sx={{ minWidth: "10%" }}>
      <Select
        value={limitValue}
        displayEmpty
        size="medium"
        onChange={(e) => dispatch(changeLimit(e.target.value))}
      >
        <MenuItem value={10}>10 Tasks</MenuItem>
        <MenuItem value={20}>20 Tasks</MenuItem>
        <MenuItem value={30}>30 Tasks</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectValueItemsFilter;
