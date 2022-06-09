import axios from "axios";
import Cookie from "js-cookie";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ErrorAlert, SuccessMessage } from "../../utilities/AlertMessage";
import { FormButton, FormTextField } from "../../utilities/Form/FormField";
import OrderOverview from "./OrderOverview/OrderOverview";

export default function BillingDetails() {
  // const router = useRouter();
  const products_data = useSelector((state) => state.cart_product.cart_list);

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  // if (!userInfo?.user_email) {
  //   router.push("/my_account/my_acc");
  // }

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [name, setName] = useState(userInfo?.user_name);
  const [email, setEmail] = useState(userInfo?.user_email);
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");

  // make a user data object for ordering the products
  const order_data = {
    products_data,
    customer_info: {
      customer_name: name,
      customer_email: email,
      customer_mobile: mobile,
      customer_country: country,
      customer_district: district,
      customer_street: street,
    },
    product_status: {
      payment_method: "cash-on",
      payment_status: "due",
      order_status: "pendding",
      order_condition: "your order is pendding and unpaid.",
      order_date: {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
    },
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(order_data);

    const { data } = await axios.post(
      // "http://localhost:3000/api/checkout/place_order",
      "https://daily-need.vercel.app/api/checkout/place_order",
      order_data
    );

    if (data?.success) {
      setError("");
      setSuccess(data?.success);
    } else {
      setSuccess("");
      setError(data.error);
    }
  };

  return (
    <>
      <div className="lg:flex justify-between">
        <div className="order_overview lg:w-2/5 lg:mr-10 ">
          <div className="title_of_details">
            <h1 className="text-medium font-semibold tracking-wider my-5 text-black2">
              Your Order
            </h1>
          </div>
          <OrderOverview carted_products={products_data} />
        </div>
        <div className="billing_details_form lg:w-3/5 lg:!mt-0 !mt-15">
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
