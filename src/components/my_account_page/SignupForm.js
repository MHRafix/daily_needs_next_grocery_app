import { useState } from "react";
import { ErrorAlert, SuccessMessage } from "../../utilities/AlertMessage";
import { FormButton, FormTextField } from "../../utilities/Form/FormField";
import handleForm from "../../utilities/Form/handleForm";

export default function SignupForm() {
  // take some state for storing data
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  // make a data object
  const user_info = {
    user_name: username,
    user_email: useremail,
    user_password: password,
    user_admin: false,
  };

  const { success, error, handleFormSubmit } = handleForm(
    user_info,
    cnfPassword,
    "my_account/signup_api"
  );
  return (
    <form onSubmit={handleFormSubmit}>
      {/* message alert */}
      {success && <SuccessMessage message={success} />}
      {error && <ErrorAlert message={error} />}
      <FormTextField
        form_label="user name"
        type="text"
        required={true}
        setState={setUsername}
      />

      <FormTextField
        form_label="your email"
        type="email"
        required={true}
        setState={setUseremail}
      />

      <FormTextField
        form_label="your password"
        type="password"
        required={true}
        setState={setPassword}
      />

      <FormTextField
        form_label="re-type password"
        type="password"
        required={true}
        setState={setCnfPassword}
      />

      <p className="text-light text-black4 tracking-wide my-10">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>

      <FormButton type="submit" btn_name="Signup Now" />
    </form>
  );
}
