import { createSlice } from "@reduxjs/toolkit";
import { Product, Category, FileInfo } from "../../models";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    getMVProducts: (state) => {
      let testP = new Product();
      state.products = [testP];
    },
  },
});

export const { getMVProducts } = counterSlice.actions;

export const selectProducts = (state) => {
  return state.product.products;
};

export default productSlice.reducer;
