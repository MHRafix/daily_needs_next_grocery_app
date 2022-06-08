import React from "react";
import CardData from "../../../utilities/CardData";
import DataChart from "../../../utilities/GraphChart/DataChart";
import ProfileContentLayout from "../../../utilities/ProfileContentLayout";
import { card_fake_data } from "../../../utilities/React_Table/DataTables.js/table_data";

export default function ProfileDashboardContent() {
  //data for bar chart
  const data = {
    labels: ["Jun-1", "Jun-2", "Jun-3", "Jun-4", "Jun-5", "Jun-6", "Jun-7"],
    label: "Purchased Chart",
    datasets: [
      {
        label: "# My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backroundColor: "red!",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointBorderColor: "green",
        pointBackgroundColor: "green",
      },
    ],
  };
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
          <div className="purchased_chart_and_payment_table_wrapper">
            <div className="purchased_chart_wrapper">
              <h1 className="dashboard_content_title">{data.label}</h1>

              <DataChart type="line" data={data} />
            </div>
            <div className="purchased_data_table_wrapper">
              <h1 className="dashboard_content_title">Payment Card</h1>
              <div id="card_data_table" className="overflow-y-scroll h-per_86">
                {card_fake_data.map((card) => (
                  <CardData key={card._id} card_data={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProfileContentLayout>
    </>
  );
}
