import { serialize } from "cookie";
import User from "../../../common/models/User";
import generateToken from "../../../common/types/utils/generateToken";
import dbConnect from "../../../common/types/utils/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;

  await dbConnect();

  if (method !== "POST") {
    return res.status(403).json({ error: "errorMethod", message: "Method not found!" });
  }

  if (method === "POST") {
    try {
      if (!email || !password) {
        return res.status(400).json({ error: "FieldsError", message: "Please Enter all the Fields" })
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "EmailError", message: "Invalid Email" });
      }

      const verifyPassword = await user.matchPassword(password);
      if (!verifyPassword) {
        return res.status(401).json({ error: "PasswordError", message: "Wrong Password" });
      }

      // set cookie to header
      if (user && verifyPassword) {
        try {
          const token = generateToken(user.id);
          const cookieOption = {
            httpOnly: true,
            maxAge: 3600 * 24 * 30,
            path: "/",
            sameSite: "Strict",
            secure: process.env.NODE_ENV === "production",
          }
          res.status(200).setHeader("Set-Cookie", serialize("authToken", token, cookieOption));
          return res.status(200).json({ success: "SuccessToken", message: "Set token to header!" });

        } catch (error) {
          return res.status(401).send({ error: "errorToken", message: "Failed send token to header" });
        }
      }

    } catch (err) {
      return res.status(500).json(err);
    }

  }
}