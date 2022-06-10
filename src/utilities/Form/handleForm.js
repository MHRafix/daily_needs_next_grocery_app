import axios from "axios";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";

export default function handleForm(user_info, cnfPassword, api_url) {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // server req data
  const reqDep = {
    api_url,
    user_info,
    router,
    setSuccess,
    setError,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      if (user_info?.user_password === cnfPassword) {
        if (user_info?.user_password) {
          if (user_info?.user_password.length > 5) {
            // send req to server
            sendReq(reqDep, "/my_account/my_profile/edit_account_details");
          } else {
            setSuccess("");
            setError("Password must be atleast 6 charecters!");
          }
        } else {
          // send req to server
          sendReq(reqDep, "/my_account/my_profile/dashboard");
        }
      } else {
        setSuccess("");
        setError("Password and confirm password didn't matched!");
      }
    } catch (err) {
      setSuccess("");
      setError(error);
    }
  };
  return { success, error, handleFormSubmit };
}

// const send req to server with data

const sendReq = async (reqDep, redirect_url) => {
  const { api_url, user_info, router, setSuccess, setError } = reqDep;

  const { redirect } = router.query;
  const { data } = await axios.post(
    // `http://localhost:3000/api/${api_url}`,
    `https://daily-need.vercel.app/api/${api_url}`,
    user_info
  );

  if (data?.success) {
    setError("");
    setSuccess(data?.success);
    Cookie.set("user_information", JSON.stringify(data), {
      expires: 30, // 30 days
      secure: true,
      sameSite: "strict",
      path: "/",
    });
    router.push(redirect || redirect_url);
  } else {
    setSuccess("");
    setError(data.error);
  }
};
