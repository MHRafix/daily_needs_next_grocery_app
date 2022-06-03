import React from "react";
import ProfileContentLayout from "../../../utilities/ProfileContentLayout";

export default function ProfileDashboardContent() {
  return (
    <>
      <ProfileContentLayout content_title="profile dashboard">
        <div id="dashboard_home_wrapper">
          {/* topbar purchase summary start here */}
          <div id="topbar_purchase_summary">
            <div
              id="purchase_history_amount"
              // style={{ border: "1px solid #0cc5b7" }}
            >
              <h1 id="amount_label">৳ 456456</h1>
              <span id="hstory_name">current purchased</span>
            </div>
            <div id="purchase_history_amount">
              <h1 id="amount_label">৳ 2345</h1>
              <span id="hstory_name">inprogress purchased</span>
            </div>
            <div id="purchase_history_amount" style={{ borderRight: "none" }}>
              <h1 id="amount_label">৳ 3045</h1>
              <span id="hstory_name">canceled purchased</span>
            </div>
          </div>
          {/* topbar purchase summary end here */}
        </div>
      </ProfileContentLayout>
    </>
  );
}
