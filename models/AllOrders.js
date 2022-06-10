import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products_data: [
      {
        _id: { type: String },
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
    ],
    customer_info: {
      customer_name: { type: String, required: true },
      customer_email: { type: String, required: true },
      customer_mobile: { type: String, required: true },
      customer_country: { type: String, required: true },
      customer_district: { type: String, required: true },
      customer_street: { type: String, required: true },
    },
    product_status: {
      payment_method: { type: String, required: true },
      payment_status: { type: String, required: true },
      order_status: { type: String, required: true },
      order_condition: { type: String, required: true },
      total_amount: { type: Number, required: true },
      total_qty: { type: Number, required: true },
      order_date: {
        date: { type: Number, required: true },
        month: { type: Number, required: true },
        year: { type: Number, required: true },
      },
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
