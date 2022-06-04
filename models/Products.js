import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    thumbnail: { type: Object, required: true },
    thumbnail_big: { type: Object, required: true },
    prices: {
      regular_price: { type: Number, required: true },
      sale_price: { type: Number, required: true },
    },
    category: { type: String, required: true },
    reviews_ratings: [{ rating: Number, review: String }],
    stock_available: { type: Number, required: true },
    sold_quantity: { type: Number, required: true },
    additional_info: {
      description: { type: String, required: true },
      weight: { type: String, required: true },
      tags: [String],
    },
    product_status: { type: String, required: true },
    product_type: { type: String, default: "fixed-sale" },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;

// {
//     _id: 114,
//     title: "Native Organic Papaya",
//     // slug: "fit-lady-pant",
//     thumbnail: Product2,
//     prices: {
//       regular_price: 13.56,
//       sale_price: 9.99,
//     },
//     category: "Fruits & Vegetables",

//     reviews_ratings: [
//       {
//         rating: 3.7,
//         review:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
//       },
//       {
//         rating: 3.5,
//         review:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
//       },
//       {
//         rating: 3,
//         review:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, necessitatibus!",
//       },
//     ],
//     stock_available: 23,
//     sold_quantity: 10,
//     additional_info: {
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.",
//       weight: "1kg",
//       tags: ["green fruits", "fruits"],
//     },
//     product_status: "in-stock",
//   },
