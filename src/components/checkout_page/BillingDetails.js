import Cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ErrorAlert, SuccessMessage } from "../../utilities/AlertMessage";
import { FormButton, FormTextField } from "../../utilities/Form/FormField";
import handleForm from "../../utilities/Form/handleForm";
import OrderOverview from "./OrderOverview/OrderOverview";

export default function BillingDetails() {
  const router = useRouter();

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (!userInfo?.user_email) {
    router.push("/my_account/my_acc");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState(userInfo?.user_email);
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");

  // make a data object
  //   const user_info = {
  //     user_name: name,
  //     user_email: useremail,
  //     user_password: password,
  //     user_pic: userpic,
  //     user_admin: false,
  //   };

  const { success, error, handleFormSubmit } = handleForm(
    // user_info,
    // cnfPassword,
    "my_account/update_acc_details"
  );

  return (
    <>
      <div className="flex justify-between">
        <div className="order_overview w-2/5 sm:mr-10">
          <div className="title_of_details">
            <h1 className="text-medium font-semibold tracking-wider my-5 text-black2">
              Your Order
            </h1>
          </div>
          <OrderOverview />
        </div>
        <div className="billing_details_form  w-3/5 sm:!ml-15">
          <div className="title_of_details">
            <h1 className="text-medium font-semibold tracking-wider my-5 text-black2">
              Billing Details
            </h1>
          </div>
          <form onSubmit={handleFormSubmit}>
            {/* message alert */}
            {success && <SuccessMessage message={success} />}
            {error && <ErrorAlert message={error} />}
            <FormTextField
              form_label="your name"
              type="text"
              defaultValue={userInfo?.user_name}
              required={true}
              disabled={false}
              setState={setName}
            />

            <FormTextField
              form_label="your email"
              type="email"
              defaultValue={userInfo?.user_email}
              required={true}
              disabled={false}
              setState={setEmail}
            />

            <FormTextField
              form_label="mobile number"
              type="text"
              required={true}
              disabled={false}
              setState={setMobile}
            />

            <FormTextField
              form_label="your country"
              type="text"
              required={true}
              disabled={false}
              setState={setCountry}
            />

            <FormTextField
              form_label="your district"
              type="text"
              required={true}
              disabled={false}
              setState={setDistrict}
            />

            <FormTextField
              form_label="street address"
              type="text"
              required={true}
              disabled={false}
              setState={setStreet}
            />

            <FormButton type="submit" btn_name="Place Order" />
          </form>
        </div>
      </div>
    </>
  );
}
