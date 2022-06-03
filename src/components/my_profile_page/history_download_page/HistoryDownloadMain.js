import Cookie from "js-cookie";
import React from "react";
import Breadcrumb from "../../commons/Breadcrumb/Breadcrumb";
import ProfileContentContainer from "../my_profile_dashboard/ProfileContentContainer";
import HistoryDownloadContent from "./HistoryDownloadContent";

export default function HistoryDownloadMain() {
  // breadcrunb navigation
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (userInfo?.user_name) {
    var bread_string = `My Profile/${userInfo?.user_name}/history download`;
  }

  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ProfileContentContainer>
        <HistoryDownloadContent />
      </ProfileContentContainer>
    </>
  );
}
