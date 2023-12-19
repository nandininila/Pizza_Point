import jwt from "jsonwebtoken";
import User from "../../../../common/models/User";
import { numberToString } from "../../../../common/types/utils/convert/numberToString";
import dbConnect from "../../../../common/types/utils/mongoose";

export default async function handler(req, res) {
    const { method, body } = req;

    if (method !== "POST") {
        return res.status(404).json("method not found");
    }

    if (method === "POST") {

        const authToken = body;

        if (!authToken) {
            return res.status(404).json({ authenticated: false });
        }

        const jwtToken = numberToString(authToken);
        const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);
        const tokenId = decodedToken.id;

        await dbConnect();

        const findUser = await User.findById(tokenId).select("-password");

        try {
            if (findUser) {
                return res.status(200).json({ authenticated: true, userInfo: findUser });
            } else {
                return res.status(401).json({ authenticated: false });
            }
        } catch (err) {
            return res.status(500).json({ authenticated: false });
        }
    }

}