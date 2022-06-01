import React from "react";

export default function FormLayoutContainer({ children, form_title }) {
  return (
    <div id="form_layout_wrapper">
      <div id="form_name">
        <h1 id="form_name_title">{form_title}</h1>
      </div>
      <div id="form_body">{children}</div>
    </div>
  );
}
