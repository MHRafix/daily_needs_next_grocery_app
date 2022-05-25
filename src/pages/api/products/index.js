import nc from "next-connect";
import Product from "../../../../models/Products";
import { products_data2 } from "../../../fake_data/all_fakedata";
import db from "../../../utilities/database";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(products_data2);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
