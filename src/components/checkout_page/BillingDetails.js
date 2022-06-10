import axios from "axios";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduceCookie } from "../../redux/cart_products/action";
import { ErrorAlert, SuccessMessage } from "../../utilities/AlertMessage";
import { FormButton, FormTextField } from "../../utilities/Form/FormField";
import PaypalModal from "../../utilities/PaymentModal/PaypalModal";
import OrderOverview from "./OrderOverview/OrderOverview";

export default function BillingDetails() {
  const router = useRouter();
  const dispatch = useDispatch();
  const empty_data = [];
  const products_data = useSelector((state) => state.cart_product.cart_list);

  let total_amount = 0;

  if (products_data) {
    for (const products of products_data) {
      total_amount =
        products?.prices?.sale_price > 0
          ? total_amount + products?.prices?.sale_price * products?.quantity
          : total_amount + products?.prices?.regular_price * products?.quantity;
    }
  }

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  const [paypalModal, setPaypalModal] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [name, setName] = useState(userInfo?.user_name);
  const [email, setEmail] = useState(userInfo?.user_email);
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [payment, setPayment] = useState("cash-on");

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
      payment_method: payment,
      payment_status: "due",
      order_status: "pendding",
      order_condition: "your order is pendding and unpaid.",
      total_amount: total_amount.toFixed(2),
      total_qty: products_data.length,
      order_date: {
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
    },
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (payment === "cash-on") {
      setPaypalModal(false);

      const { data } = await axios.post(
        // "http://localhost:3000/api/checkout/place_order",
        "https://daily-need.vercel.app/api/checkout/place_order",
        order_data
      );

      if (data?.success) {
        setError("");
        setSuccess(data?.success);
        Cookie.remove("cart_product_ids");

        setTimeout(() => {
          dispatch(reduceCookie(empty_data));
          router.push("/shop/grid_shop");
        }, 2000);
      } else {
        setSuccess("");
        setError(data.error);
      }
    } else {
      setPaypalModal(true);
    }
  };

  return (
    <>
      {paypalModal && <PaypalModal />}
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

            <div>
              <label id="input_label" htmlFor="field_label">
                Payment Type
              </label>
              <br />
              <input
                style={{ marginBottom: "20px", marginTop: "10px" }}
                type="radio"
                name="payment_method"
                value="cash-on"
                onChange={(e) => setPayment(e.target.value)}
                // checked
              />
              &nbsp;&nbsp; Cash On &nbsp;&nbsp;&nbsp;
              <input
                type="radio"
                name="payment_method"
                value="paypal"
                onChange={(e) => setPayment(e.target.value)}
              />
              &nbsp;&nbsp; Paypal
            </div>

            <FormButton
              type="submit"
              disable={!products_data.length ? true : false}
              btn_name="Place Order"
            />
          </form>
        </div>
      </div>
    </>
  );
}
