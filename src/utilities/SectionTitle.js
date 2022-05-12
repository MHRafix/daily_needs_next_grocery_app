import React from "react";

export default function SectionTitle({ section_title, percentage }) {
  return (
    <div className="section_title_wrapper">
      <div className="section_title">
        <h3 className="title">
          {section_title}
          <span className="sale_percentage">{percentage} OFF</span>
        </h3>
      </div>
    </div>
  );
}
