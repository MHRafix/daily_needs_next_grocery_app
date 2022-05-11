import React from "react";
import BrandArea from "./BrandArea";
import NavigationBar from "./NavigationBar";
import Topbar from "./Topbar";

export default function HeaderMain() {
  return (
    <>
      <Topbar />
      <BrandArea />
      <NavigationBar />
    </>
  );
}
