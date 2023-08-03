import React from "react";
import { NavBar } from "./NavBar";
import HeadTitle from "./HeadTitle";

function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
