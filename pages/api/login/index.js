import { serialize } from "cookie";
import User from "../../../common/models/User";
import { stringToNumber } from "../../../common/types/utils/convert/stringToNumber";
import generateToken from "../../../common/types/utils/generateToken";
import dbConnect from "../../../common/types/utils/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;

  await dbConnect();

  if (method !== "POST") {
    return res.status(405).json({ error: "errorMethod", message: "Method not found!" });
  }

  if (method === "POST") {
    try {
      if (!email || !password) {
        return res.status(400).json({ error: "FieldsError", message: "Please Enter all the Fields" })
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "EmailError", message: "Wrong Email!" });
      }

      const verifyPassword = await user.matchPassword(password);
      if (!verifyPassword) {
        return res.status(401).json({ error: "PasswordError", message: "Wrong Password!" });
      }

      // set cookie to header
      if (user && verifyPassword) {
        try {
          const token = generateToken(user.id);
          const encodeJwt = stringToNumber(token);
          const cookieOption = {
            httpOnly: false,
            maxAge: 3600 * 24 * 30,
            path: "/",
            sameSite: "Strict",
            secure: process.env.NODE_ENV === "production",
          }
          res.status(201).setHeader("Set-Cookie", serialize("authToken", encodeJwt, cookieOption));
          return res.status(200).json({ success: "login", message: "Successfully Login" });
        } catch (error) {
          return res.status(400).json({ error: "login", message: "Logout failed!" });
        }
      }

    } catch (err) {
      return res.status(500).json(err);
    }

  }
}