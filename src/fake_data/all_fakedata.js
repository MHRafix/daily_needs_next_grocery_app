// category image import here
import CatImg1 from "../images/category_images/cat1.webp";
import CatImg10 from "../images/category_images/cat10.webp";
import CatImg11 from "../images/category_images/cat11.webp";
import CatImg12 from "../images/category_images/cat12.webp";
import CatImg2 from "../images/category_images/cat2.webp";
import CatImg3 from "../images/category_images/cat3.webp";
import CatImg4 from "../images/category_images/cat4.webp";
import CatImg5 from "../images/category_images/cat5.webp";
import CatImg6 from "../images/category_images/cat6.webp";
import CatImg7 from "../images/category_images/cat7.webp";
import CatImg8 from "../images/category_images/cat8.webp";
import CatImg9 from "../images/category_images/cat9.webp";
// products image import here
import Product1 from "../images/products/product1.webp";
import Product2 from "../images/products/product2.webp";
import Product3 from "../images/products/product3.webp";
import Product4 from "../images/products/product4.webp";
import Product5 from "../images/products/product5.webp";
import Product6 from "../images/products/product6.webp";
import Product7 from "../images/products/product7.webp";
import Product8 from "../images/products/product8.webp";
import Product9 from "../images/products/product9.webp";

// header navigation menus fake data here
export const header_navigation = [
  { _id: 1, menu_name: "home", href: "/" },
  { _id: 2, menu_name: "about us", href: "/about_us" },
  { _id: 3, menu_name: "fruits & vegetables", href: "/fruits_and_vegetables" },
  { _id: 4, menu_name: "shop", href: "/shop" },
  { _id: 5, menu_name: "blog", href: "/blog" },
  { _id: 6, menu_name: "FAQ", href: "/faq" },
  { _id: 7, menu_name: "contact", href: "/contact" },
];

// categories fake data here
export const categories_data = [
  { _id: 1, cat_name: "Beverages", cat_image: CatImg1, cat_items: 1 },
  {
    _id: 2,
    cat_name: "Biscuits, Snacks & Chocolates",
    cat_image: CatImg2,
    cat_items: 3,
  },
  {
    _id: 3,
    cat_name: "Breakfast & Dairy",
    cat_image: CatImg3,
    cat_items: 22,
  },
  {
    _id: 4,
    cat_name: "Fruits & Vegetables",
    cat_image: CatImg4,
    cat_items: 52,
  },
  {
    _id: 5,
    cat_name: "Furnishing & Home Needs",
    cat_image: CatImg5,
    cat_items: 62,
  },
  {
    _id: 6,
    cat_name: "Grocery & Staples",
    cat_image: CatImg6,
    cat_items: 42,
  },
  {
    _id: 7,
    cat_name: "Home & Kitchen",
    cat_image: CatImg7,
    cat_items: 212,
  },
  {
    _id: 8,
    cat_name: "Household Needs",
    cat_image: CatImg8,
    cat_items: 342,
  },
  {
    _id: 9,
    cat_name: "Meats, Frozen & Seafood",
    cat_image: CatImg9,
    cat_items: 3,
  },
  {
    _id: 10,
    cat_name: "Noodles, Sauces & Instant Food",
    cat_image: CatImg10,
    cat_items: 3,
  },
  {
    _id: 11,
    cat_name: "Personal Care",
    cat_image: CatImg11,
    cat_items: 3,
  },
  { _id: 12, cat_name: "Pet Care", cat_image: CatImg12, cat_items: 3 },
];

// products fake data here
export const products_data = [
  {
    _id: 113,
    title: "Organic Sweet Corn",
    // slug: "fit-lady-pant",
    thumbnail: Product1,
    prices: {
      regular_price: 18.56,
      sale_price: 14.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 4.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 33,
    sold_quantity: 20,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["vegtables", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 114,
    title: "Native Organic Papaya",
    // slug: "fit-lady-pant",
    thumbnail: Product2,
    prices: {
      regular_price: 13.56,
      sale_price: 9.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 115,
    title: "Green Seedless Grapes",
    // slug: "fit-lady-pant",
    thumbnail: Product3,
    prices: {
      regular_price: 24.56,
      sale_price: 19.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 116,
    title: "Organic Grape Tomatoes",
    // slug: "fit-lady-pant",
    thumbnail: Product4,
    prices: {
      regular_price: 4.56,
      sale_price: 2.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 117,
    title: "Organic Broccoli",
    // slug: "fit-lady-pant",
    thumbnail: Product5,
    prices: {
      regular_price: 1.56,
      sale_price: 0.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 118,
    title: "Washed Sugar Snap Peas",
    // slug: "fit-lady-pant",
    thumbnail: Product6,
    prices: {
      regular_price: 8.56,
      sale_price: 5.99,
    },
    category: "Pet Care",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 119,
    title: "Organic Strawberry",
    // slug: "fit-lady-pant",
    thumbnail: Product7,
    prices: {
      regular_price: 11.56,
      sale_price: 10.0,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 120,
    title: "Organic Vegetable",
    // slug: "fit-lady-pant",
    thumbnail: Product8,
    prices: {
      regular_price: 11.56,
      sale_price: 10.0,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    _id: 121,
    title: "Gold Creamer Potatoes",
    // slug: "fit-lady-pant",
    thumbnail: Product9,
    prices: {
      regular_price: 51.56,
      sale_price: 0,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 0,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
];

export const products_data2 = [
  {
    // _id: 113,
    title: "Organic Sweet Corn",
    slug: "organic-sweet-corn",
    thumbnail: Product1,
    prices: {
      regular_price: 18.56,
      sale_price: 14.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 4.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 33,
    sold_quantity: 20,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["vegtables", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 114,
    title: "Native Organic Papaya",
    slug: "native-organic-papaya",
    thumbnail: Product2,
    prices: {
      regular_price: 13.56,
      sale_price: 9.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 115,
    title: "Green Seedless Grapes",
    slug: "green-seedless-grapes",
    thumbnail: Product3,
    prices: {
      regular_price: 24.56,
      sale_price: 19.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 116,
    title: "Organic Grape Tomatoes",
    slug: "organic-grapes-tomatoes",
    thumbnail: Product4,
    prices: {
      regular_price: 4.56,
      sale_price: 2.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 117,
    title: "Organic Broccoli",
    slug: "organic-broccoli",
    thumbnail: Product5,
    prices: {
      regular_price: 1.56,
      sale_price: 0.99,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 118,
    title: "Washed Sugar Snap Peas",
    slug: "washed-sugar-snap-peas",
    thumbnail: Product6,
    prices: {
      regular_price: 8.56,
      sale_price: 5.99,
    },
    category: "Pet Care",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 119,
    title: "Organic Strawberry",
    slug: "organic-strawberry",
    thumbnail: Product7,
    prices: {
      regular_price: 11.56,
      sale_price: 10.0,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 120,
    title: "Organic Vegetable",
    slug: "organic-vegetable",
    thumbnail: Product8,
    prices: {
      regular_price: 11.56,
      sale_price: 10.0,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 23,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
  {
    // _id: 121,
    title: "Gold Creamer Potatoes",
    slug: "gold-creamer-potatoes",
    thumbnail: Product9,
    prices: {
      regular_price: 51.56,
      sale_price: 0,
    },
    category: "Fruits & Vegetables",

    reviews_ratings: [
      {
        rating: 3.7,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
      {
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
      },
    ],
    stock_available: 0,
    sold_quantity: 10,
    additional_info: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
      weight: "1kg",
      tags: ["green fruits", "fruits"],
    },
    product_status: "in-stock",
  },
];
