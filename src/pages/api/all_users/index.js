import nc from "next-connect";
import User from "../../../../models/Users";
import db from "../../../utilities/database";

// products getting function here
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const Users = await User.find({});
  await db.disconnect();
  res.send(Users);
});

// function export here
export default handler;
