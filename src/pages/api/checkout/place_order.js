import nc from "next-connect";
import Order from "../../../../models/AllOrders";
import db from "../../../utilities/database";

const handler = nc();
handler.post(async (req, res) => {
  await db.connect();
  const order_data = req.body;
  await Order.insertMany(order_data);
  await db.disconnect();
  res.send({
    success: "Your order successfully placed!",
  });
});

export default handler;
