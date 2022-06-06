import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_email: { type: String, required: true },
    user_password: { type: String, required: true },
    user_pic: { data: Buffer, contentType: String },
    user_admin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", productSchema);
export default User;
