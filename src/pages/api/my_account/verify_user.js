import bcrypt from "bcryptjs";
import nc from "next-connect";
import User from "../../../../models/Users";
import db from "../../../utilities/database";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ user_email: req.body.useremail });
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.verifypass, user.user_password)) {
    res.send({
      verify: true,
      success: "You're verified for 24 hours!",
    });
  } else {
    res.send({ error: "Opps, incorrect password!" });
  }
});

export default handler;
