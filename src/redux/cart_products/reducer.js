import { addToCartProducts } from "./action";

const initialState = {
  cart_list: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case addToCartProducts.ADD_TO_CART: {
      const new_cart = [...state.cart_list, payload];
      return { ...state, cart_list: new_cart };
    }
    default:
      return state;
  }
}
