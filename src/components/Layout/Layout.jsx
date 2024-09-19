import  { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";

const Layout = () => {
    return (
        <div>
          <NavBar/>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
        </div>
      );
}

export default Layout