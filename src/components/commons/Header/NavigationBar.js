import Cookie from "js-cookie";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { header_navigation } from "../../../fake_data/all_fakedata";
import { reduceCookie } from "../../../redux/cart_products/action";

export default function NavigationBar() {
  // fetching all data from the server
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:3000/api/allproducts`)
    fetch(`https://daily-need.vercel.app/api/allproducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // set cart product to the redu
  const cart_cookie_products =
    Cookie.get("cart_product_ids") &&
    JSON.parse(Cookie.get("cart_product_ids"));

  const carted_products = [];

  if (cart_cookie_products) {
    for (const cart_product of cart_cookie_products) {
      const matched_cart = products?.find(
        (product) => product._id === cart_product._id
      );
      if (matched_cart) {
        matched_cart.quantity = cart_product.quantity;
        carted_products.push(matched_cart);
      }
    }
    setTimeout(() => {
      dispatch(reduceCookie(carted_products));
    }, 100);
  }

  return (
    <div
      className="navigation_wrapper"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <div className="container_wrapper">
        <div className="navbars">
          {header_navigation.map((link) => (
            <NextLink key={link._id} href={link.href} passHref>
              <span className="!capitalize !mx-3 cursor-pointer tracking-wider">
                {link.menu_name}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
}
