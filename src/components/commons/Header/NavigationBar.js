import Cookie from "js-cookie";
import NextLink from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import Product from "../../../../models/Products";
import { header_navigation } from "../../../fake_data/all_fakedata";
import { reduceCookie } from "../../../redux/cart_products/action";
import db from "../../../utilities/database";

export default function NavigationBar({ products }) {
  const dispatch = useDispatch();
  const cart_cookie_products =
    Cookie.get("cart_product_ids") &&
    JSON.parse(Cookie.get("cart_product_ids"));

  const carted_products = [];

  if (cart_cookie_products) {
    for (const cart_product of cart_cookie_products) {
      const matched_cart = data.find(
        (product) => product._id === cart_product._id
      );
      matched_cart.quantity = cart_product.quantity;
      carted_products.push(matched_cart);
    }
    setTimeout(() => {
      dispatch(reduceCookie(carted_products));
    }, 1000);
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

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
