import {
  addCookieToRedux,
  addToCartProducts,
  decreaseQty,
  increaseQty,
  reduceCartProduct,
} from "./action";

// carted_products ? carted_products : [],

const initialState = {
  cart_list: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // add product to cart list here
    case addToCartProducts.ADD_TO_CART: {
      const new_cart = [...state.cart_list, payload];
      return { ...state, cart_list: new_cart };
    }

    // remove or reduce product from cart list here
    case reduceCartProduct.REDUCE_CART_PRODUCT: {
      const rest_cart = state.cart_list.filter(
        (product) => product._id !== payload
      );
      return { ...state, cart_list: rest_cart };
    }

    // just increase cart product quantity here
    case increaseQty.INCREASE_QTY: {
      let existed_product = state.cart_list.find(
        (product) => product._id === payload
      );
      if (existed_product.quantity < 10) {
        const rest_cartlist = state.cart_list.filter(
          (product) => product._id !== payload
        );

        existed_product.quantity = existed_product.quantity + 1;
        const updated_cartlist = [...rest_cartlist, existed_product];
        return { ...state, cart_list: updated_cartlist };
      } else {
        alert("Maximum quantity limit exceed!");
        return state;
      }
    }

    // decrease cart product quantity
    case decreaseQty.DECREASE_QTY: {
      let existed_product = state.cart_list.find(
        (product) => product._id === payload
      );
      if (existed_product.quantity > 1) {
        const rest_cartlist = state.cart_list.filter(
          (product) => product._id !== payload
        );

        existed_product.quantity = existed_product.quantity - 1;
        const updated_cartlist = [...rest_cartlist, existed_product];
        return { ...state, cart_list: updated_cartlist };
      } else {
        alert("Minimum quantity limit exceed!");
        return state;
      }
    }

    case addCookieToRedux.ADD_COOKIE_REDUX: {
      return { ...state, cart_list: payload };
    }
    default:
      return state;
  }
}
