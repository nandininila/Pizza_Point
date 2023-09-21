import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        // When add to cart
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },

        // When increase quantity
        increaseQuantity: (state, action) => {
            state.products.forEach((product) => {
                if (product.customId == action.payload.customId) {
                    product.quantity += action.payload.quantity;
                }
            });
            state.total += action.payload.price * action.payload.quantity;
        },

        // When decrease quantity
        decreaseQuantity: (state, action) => {
            state.products.forEach((product) => {
                if (product.customId == action.payload.customId) {
                    product.quantity -= action.payload.quantity;
                }
            });
            state.total -= action.payload.price * action.payload.quantity;
        },

        // When reset cart [cart will be in initial value]
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },

        deleteProduct: (state, action) => ({
            ...state,
            products: state.products.filter(
                (item) => item.customId !== action.payload.customId
            ),
        }),

        updateCart: (state, action) => {
            state.quantity -= 1;
            state.total -= action.payload.price * action.payload.quantity;
        },
    },
});

export const { addProduct, increaseQuantity, decreaseQuantity, reset, deleteProduct, updateCart } = cartSlice.actions;
export default cartSlice.reducer;