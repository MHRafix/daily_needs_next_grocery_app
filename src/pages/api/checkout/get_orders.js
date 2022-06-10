import nc from "next-connect";
import Order from "../../../../models/AllOrders";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const Users = await Order.find({});
  await db.disconnect();
  res.send(Users);
});

// function export here
export default handler;
