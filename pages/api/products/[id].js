import Product from "../../../common/models/Product";
import dbConnect from "../../../common/types/utils/mongoose";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // if (method === "POST") {
    //     try {
    //         const product = await Product.create(req.body);
    //         res.status(201).json(product);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }

    // if (method === "PUT") {
    //     try {
    //         const product = await Product.create(req.body);
    //         res.status(201).json(product);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }

    // if (method === "DELETE") {
    //     try {
    //         const product = await Product.create(req.body);
    //         res.status(201).json(product);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }


}