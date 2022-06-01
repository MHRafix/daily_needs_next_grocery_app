import bcrypt from "bcryptjs";
import nc from "next-connect";
import User from "../../../../models/Users";
import { signToken } from "../../../utilities/auth";
import db from "../../../utilities/database";

const handler = nc();
handler.post(async (req, res) => {
  await db.connect();
  const all_users = await User.find({});
  const exist = all_users.find(
    (user) => user.user_email === req.body.user_email
  );

  if (exist) {
    res.send({ error: "User is already exist!" });
  } else {
    const newUser = new User({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: bcrypt.hashSync(req.body.user_password),
      user_admin: req.body.user_admin,
    });

    const user = await newUser.save();
    await db.disconnect();

    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      user_name: user.user_name,
      user_email: user.user_email,
      user_admin: user.user_admin,
      success: "Account created successfully!",
    });
  }
});

export default handler;
