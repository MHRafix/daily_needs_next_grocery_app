import React from "react";

export default function SectionTitle({ section_title, percentage }) {
  return (
    <>
      <h3 className="section_title">
        {section_title}
        <span className="sale_percentage"> {percentage} OFF</span>
      </h3>
      <button id="view_btn">view all</button>
    </>
  );
}
