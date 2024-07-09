import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../../widgets/header/ui/Header.tsx";


const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Header/>

      <Container component='main' maxWidth='md'>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;