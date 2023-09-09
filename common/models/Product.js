import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 60,
        },
        description: {
            type: String,
            required: true,
            maxLength: 200,
        },
        img: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        weight: {
            type: String,
        },
        sizes: {
            type: [
                {
                    text: { type: String, required: true },
                    price: { type: Number, required: true },
                },
            ],
        },
        extras: {
            type: [
                {
                    text: { type: String, required: true },
                    price: { type: Number, required: true },
                },
            ],
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);