import { Box, Typography } from "@mui/material";
import SearchFilter from "../../../../features/filters/search/ui/SearchFilter.tsx";
import s from './Header.module.css'
import clsx from "clsx";
import SelectFilter from "../../../../features/filters/select/ui/SelectFilter.tsx";

const Header = () => {
  return (
    <Box className={clsx(s.header, 'gCenterDivCol')}>
      <Typography variant="h4" component="h2">
        TODO LIST
      </Typography>

      <Box display='flex' width='100%' justifyContent='space-between'>
        <SearchFilter />
        <SelectFilter />
      </Box>

    </Box>
  );
};

export default Header;