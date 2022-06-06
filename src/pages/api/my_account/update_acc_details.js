import bcrypt from "bcryptjs";
import nc from "next-connect";
import User from "../../../../models/Users";
import { signToken } from "../../../utilities/auth";
import db from "../../../utilities/database";

const handler = nc();

handler.post(async (req, res) => {
  const req_data = req.body;
  await db.connect();
  const user = await User.findOne({ user_email: req_data.user_email });

  if (
    user.user_name === req_data.user_name &&
    req_data.user_password === "" &&
    req_data.user_pic === ""
  ) {
    res.send({ error: "You have to must change the details for update!" });
  } else {
    if (user.user_name !== req_data.user_name) {
      user.user_name = req_data.user_name;
    }

    if (req_data.user_password) {
      user.user_password = bcrypt.hashSync(req_data.user_password);
    }

    if (user.user_pic !== req_data.user_pic) {
      user.user_pic = req_data.user_pic;

      // const Storage = multer.diskStorage({
      //   destination: "uploads",
      //   filename: (req, res, cb) => {
      //     cb(null, file.originalname);
      //   },
      // });

      // const upload = multer({
      //   storage: Storage,
      // }).single["testImage"];

      // upload(req, res, (err) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     user.user_pic = req_data.user_pic;
      //   }
      // });
    }

    console.log(user);
    await user.save();
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      user_name: user.user_name,
      user_email: user.user_email,
      user_admin: user.user_admin,
      user_pic: user.user_pic,
      success: "User details successfully updated!",
    });
  }
  await db.disconnect();
});

export default handler;
