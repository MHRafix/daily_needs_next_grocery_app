import React from "react";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import HistoryDownloadMain from "../../../components/my_profile_page/history_download_page/HistoryDownloadMain";

export default function HistoryDownload() {
  return (
    <>
      <LayoutContainer
        title="History Download"
        description="This is history download page of 'Daily Needs Grocery' web application!"
      >
        <HistoryDownloadMain />
      </LayoutContainer>
    </>
  );
}
