import React from "react";

export default function ProfileContentLayout({ content_title, children }) {
  return (
    <div id="content_body_wrapper">
      <div id="page_content_title">
        <h1 id="content_title">{content_title}</h1>
        <span id="border_line"></span>
        <span id="border_line"></span>
      </div>
      <div id="page_content_body_document">{children}</div>
    </div>
  );
}
