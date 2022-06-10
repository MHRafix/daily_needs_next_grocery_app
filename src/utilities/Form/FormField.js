export const FormTextField = ({
  form_label,
  type,
  required,
  setState,
  defaultValue,
  disabled,
}) => {
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
        defaultValue={defaultValue}
        onChange={(e) => setState(e.target.value)}
        required={required}
        disabled={disabled}
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

export const FormButton = ({ type, btn_name, disable }) => {
  return (
    <div id="field_wrapper" className="lg:!w-1/4">
      <button type={type} id="form_btn" className="!w-full" disabled={disable}>
        {btn_name}
      </button>
    </div>
  );
};
