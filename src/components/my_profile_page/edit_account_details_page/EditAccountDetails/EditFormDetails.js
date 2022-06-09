import axios from "axios";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ErrorAlert, SuccessMessage } from "../../../../utilities/AlertMessage";
import {
  FormButton,
  FormTextField,
} from "../../../../utilities/Form/FormField";
import handleForm from "../../../../utilities/Form/handleForm";

export default function EditFormDetails() {
  const router = useRouter();

  const isVerify = Cookie.get("user_verify")
    ? JSON.parse(Cookie.get("user_verify"))
    : false;

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  // take some state for storing data
  const [succ, setSucc] = useState("");
  const [err, setErr] = useState("");

  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState(userInfo?.user_email);
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [userpic, setUserpic] = useState("");
  const [verifypass, setVerifypass] = useState("");
  const [verifyon, setVerifyon] = useState(isVerify.verify);

  const handleVerifyUser = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      // "http://localhost:3000/api/my_account/verify_user",
      "https://daily-need.vercel.app/api/my_account/verify_user",
      { verifypass, useremail }
    );

    if (data?.success) {
      setErr("");
      setSucc(data?.success);
      Cookie.set("user_verify", JSON.stringify(data), {
        expires: 1, // 1 days
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      setVerifyon(true);
      router.push("/my_account/my_profile/edit_account_details");
    } else {
      setSucc("");
      setErr(data.error);
    }
  };

  // make a data object
  const user_info = {
    user_name: username,
    user_email: useremail,
    user_password: password,
    user_pic: userpic,
    user_admin: false,
  };

  const { success, error, handleFormSubmit } = handleForm(
    user_info,
    cnfPassword,
    "my_account/update_acc_details"
  );

  return (
    <>
      {!verifyon ? (
        <form onSubmit={handleVerifyUser}>
          {/* message alert */}
          {succ && <SuccessMessage message={succ} />}
          {err && <ErrorAlert message={err} />}

          <FormTextField
            form_label="Current password"
            type="password"
            required={false}
            disabled={false}
            setState={setVerifypass}
          />

          <FormButton type="submit" btn_name="Verify First" />
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          {/* message alert */}
          {success && <SuccessMessage message={success} />}
          {error && <ErrorAlert message={error} />}
          <FormTextField
            form_label="user name"
            type="text"
            defaultValue={userInfo?.user_name}
            required={true}
            disabled={false}
            setState={setUsername}
          />

          <FormTextField
            form_label="new password"
            type="password"
            required={false}
            disabled={false}
            setState={setPassword}
          />

          <FormTextField
            form_label="re-type new password"
            type="password"
            required={false}
            disabled={false}
            setState={setCnfPassword}
          />

          <FormTextField
            form_label="profile pic"
            type="file"
            required={false}
            disabled={false}
            setState={setUserpic}
          />

          <FormButton type="submit" btn_name="Update Details" />
        </form>
      )}
    </>
  );
}
