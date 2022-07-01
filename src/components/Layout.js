import React from "react";
import { Stack } from "react-bootstrap";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Stack direction="horizontal">
        <Outlet />
      </Stack>
    </>
  );
};

export default Layout;
