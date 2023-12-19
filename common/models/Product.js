import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        id: Number,
        name: {
            type: String,
            required: true,
            // maxLength: 60,
        },
        description: {
            type: String,
            // required: true,
            // maxLength: 200,
        },
        image: {
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
        weight: String,
        sizes: [{
            name: String,
            price: Number
        }],
        extras: [{
            name: String,
            price: Number
        }]
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);