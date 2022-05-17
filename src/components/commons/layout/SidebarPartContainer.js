import React from "react";

export default function SidebarPartContainer({ children, filterer_name }) {
  return (
    <div className="dynamic_filter">
      <div className="filter_name">{filterer_name}</div>
      <div className="children_wrapper">{children}</div>
    </div>
  );
}
