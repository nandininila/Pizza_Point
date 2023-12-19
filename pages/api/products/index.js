// import fs from "fs";
// import path from "path";

import Product from "../../../common/models/Product";
import dbConnect from "../../../common/types//utils/mongoose";


// const getData = () => {
//     const filePath = path.join(process.cwd(), "common", "content", "data", "PizzaData", "AllPizzaData.json");
//     const fileData = fs.readFileSync(filePath);
//     const data = JSON.parse(fileData);
//     return data;
// };

// export default function handler(req, res) {
//     const data = getData();
//     res.status(200).json(data);
// }

// import { allData } from "@/common/content/data/PizzaData/Custom/AllData/AllData";

// export default function handler(req, res) {
//     res.status(200).json(allData);
// }


export default async function handler(req, res) {
    const { method, body } = req;

    await dbConnect();

    if (method === "GET") {
        try {
        const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            return res.status(400).json({ error: "getAllProducts", message: "Failed to get all products!" });
        }
    }

    if (method === "POST") {
        try {
            const product = await Product.insertMany(body);
            res.status(201).json(product);
        } catch (err) {
            return res.status(400).json({ error: "createProduct", message: "Failed to create product!" });
        }
    }


}
