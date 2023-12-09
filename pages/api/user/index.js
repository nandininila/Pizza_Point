import User from "../../../common/models/User";
import dbConnect from "../../../common/types/utils/mongoose";

export default async function handler(req, res) {
    const { method } = req;
    const { name, email, password } = req.body;

    await dbConnect();

    if (method !== "POST") {
        return res.status(403).json({ error: "errorMethod", message: "Method not found!" });
    }

    if (method === "POST") {
        try {
            if (!name || !email || !password) {
                return res.status(400).json({ message: "Please Enter all the Fields" })
            }

            const userExist = await User.findOne({ email });
            if (userExist) {
                return res.status(409).json({ error: "EmailError", message: "Email already exists" });
            }

            const user = await User.create({
                name, email, password
            });

            if (user) {
                const userInfo = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                }
                return res.status(201).json(userInfo);
            } else {
                return res.status(400).json({ message: "Failed to Create the User" });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}