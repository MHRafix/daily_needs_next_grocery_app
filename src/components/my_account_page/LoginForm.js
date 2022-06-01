import React, { useState } from "react";
import { FormButton, FormTextField } from "../../utilities/Form/FormField";

export default function LoginForm() {
  // take some state for storing data
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <FormTextField
        form_label="your email"
        type="email"
        setState={setUseremail}
        required={true}
      />

      <FormTextField
        form_label="your password"
        type="password"
        setState={setPassword}
        required={true}
      />

      <FormButton type="submit" btn_name="Login Now" />
      <p className="text-light text-black4 tracking-wide cursor-pointer mt-10 hover:text-red-400 hover:duration-300">
        Lost your password?
      </p>
    </form>
  );
}
