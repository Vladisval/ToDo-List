import { Container } from "@mui/material";
import { PropsWithChildren } from "react";



const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <Container component='main' maxWidth='md'>
      {children}
    </Container>
  );
};

export default MainLayout;