import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.find(
        (product) => product.id === action.payload.id
      );
      if (productExists) {
        productExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product.quantity === 1) {
        const index = state.findIndex(
          (product) => product.id === action.payload
        );
        state.splice(index, 1);
      } else {
        product.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
