import User from "../../../../common/models/User";
import dbConnect from "../../../../common/types/utils/mongoose";

export default async function handler(req, res) {
    const { method } = req;

    if (method !== "POST") {
        return res.status(403).json({ error: "errorMethod", message: "Method not found!" });
    }

    const tokenId = req.body;
    if (!tokenId) {
        res.status(404).json(false);
    }

    await dbConnect();

    if (method === "POST") {
        try {
            const findUser = await User.findById(tokenId).select("-password");
            if (findUser) {
                res.status(200).json(true);
            } else {
                res.status(200).json(false);
            }
        } catch (err) {
            res.status(500).json(false);
        }
    }

}