import nc from "next-connect";
import Order from "../../../../models/AllOrders";
import db from "../../../utilities/database";

const handler = nc();
handler.get(async (req, res) => {
  await db.connect();
  await Order.deleteMany();
  await db.disconnect();
  res.send({
    success: "Your order successfully deleted!",
  });
});

export default handler;
