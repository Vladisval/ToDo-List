import { Box, Typography } from "@mui/material";
import image from '../../../../images/Detective-check-footprint 1.png'

const EmptyComponent = () => {
  return (
    <Box width="60%" display="flex" alignItems="center" flexDirection="column" justifyContent='center'>
      <img src={image} alt=""/>
      <Typography variant="h3" color="textSecondary">Empty...</Typography>
    </Box>
  );
};

export default EmptyComponent;