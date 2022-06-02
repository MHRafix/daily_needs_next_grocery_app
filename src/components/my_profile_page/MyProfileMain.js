import Cookie from "js-cookie";
import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ProfileContent from "./ProfileContent";
export default function MyProfileMain() {
  // breadcrunb navigation
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (userInfo?.user_name) {
    var bread_string = `My Profile/${userInfo?.user_name}`;
  }

  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ProfileContent />
    </>
  );
}
