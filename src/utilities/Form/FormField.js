import React from "react";

export const FormTextField = ({ form_label, type, required, setState }) => {
  return (
    <div id="field_wrapper">
      <label id="input_label" htmlFor="field_label">
        {form_label}
        {required && <span id="required_sign">*</span>}
      </label>
      <br />
      <input
        type={type}
        id="field_input"
        onChange={(e) => setState(e.target.value)}
        required={required}
      />
    </div>
  );
};

export const FormTextArea = ({ form_label, cols, rows, required }) => {
  return (
    <div id="field_wrapper">
      <label id="input_label" htmlFor="field_label">
        {form_label}
        {required && <span id="required_sign">*</span>}
      </label>
      <br />
      <textarea id="field_input" cols={cols} rows={rows}></textarea>
    </div>
  );
};

export const FormButton = ({ type, btn_name }) => {
  return (
    <div id="field_wrapper">
      <button type={type} id="form_btn">
        {btn_name}
      </button>
    </div>
  );
};
