import React from "react";
import ProfileContentLayout from "../../../utilities/ProfileContentLayout";
import EditFormDetails from "./EditAccountDetails/EditFormDetails";

export default function EditAccountContent() {
  return (
    <>
      <ProfileContentLayout content_title="edit account details">
        <EditFormDetails />
      </ProfileContentLayout>
    </>
  );
}
