import React from "react";

export default function Category({ cat_data }) {
  return (
    <div id="category_wrapper">
      <input type="checkbox" id="category_input" /> &nbsp;&nbsp;
      <lebel className="text-thin">{cat_data?.cat_name}</lebel>
    </div>
  );
}
