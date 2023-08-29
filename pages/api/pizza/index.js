import fs from "fs";
import path from "path";

const getData = () => {
    const filePath = path.join(process.cwd(), "common", "content", "data", "PizzaData", "AllPizzaData.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
};

export default function handler(req, res) {
    const data = getData();
    res.status(200).json(data);
}