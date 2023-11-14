import Order from "@/common/models/Order";
import dbConnect from "@/common/types/utils/mongoose";


export default async function handler(req, res) {
    const { method, query:{id} } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }


}
