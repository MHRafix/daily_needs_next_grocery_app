import React from "react";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import EditAccountDetailsMain from "../../../components/my_profile_page/edit_account_details_page/EditAccountDetailsMain";

export default function EditAccountDetails() {
  return (
    <>
      <LayoutContainer
        title="Edit Account Details"
        description="This is edit account details page of 'Daily Needs Grocery' web application!"
      >
        <EditAccountDetailsMain />
      </LayoutContainer>
    </>
  );
}
