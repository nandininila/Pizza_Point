import { serialize } from "cookie";

export default async function handler(req, res) {

    const { method } = req;

    if (method !== "GET") {
        return res.status(405).json({ error: "errorMethod", message: "Method not found!" });
    }

    const authToken = req?.cookies?.authToken;

    if (!authToken) {
        return res.status(404).json({ error: "logout", message: "You don't login!" });
    }

    if (method === "GET") {
        try {
            const cookieOption = {
                httpOnly: true,
                maxAge: 0,
                path: "/",
                sameSite: "Strict",
                secure: process.env.NODE_ENV === "production",
            }
            res.status(200).setHeader("Set-Cookie", serialize("authToken", "123", cookieOption));
            return res.status(200).json({ success: "logout", message: "Successfully Logout" });
        } catch (error) {
            return res.status(401).json({ error: "logout", message: "Logout failed!" });
        }
    }

}