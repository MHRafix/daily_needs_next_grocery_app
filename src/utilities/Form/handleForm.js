import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";

export default function handleForm(user_info, cnfPassword, api_url) {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user_info?.user_password === cnfPassword) {
        if (user_info?.user_password.length > 5) {
          const { data } = await axios.post(
            `https://daily-need.vercel.app/api/${api_url}`,
            user_info
          );

          if (data?.success) {
            setError("");
            setSuccess(data?.success);
            Cookies.set("user_information", user_info);

            // after created account page redirect to the home page
            setTimeout(() => {
              router.push("/");
            }, 3000);
          } else {
            setSuccess("");
            setError(data.error);
          }
        } else {
          setSuccess("");
          setError("Password must be atleast 6 charecters!");
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
