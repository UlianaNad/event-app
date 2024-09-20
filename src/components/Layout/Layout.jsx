import  { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import { Container } from "./Layout.styled";

const Layout = () => {
    return (
        <Container>
          <NavBar/>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
        </Container>
      );
}

export default Layout