import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productData: [],
    loading: false,
    categories: [],
  },
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setProductCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setProductData, setLoadingState, setProductCategories } =
  productsSlice.actions;

export default productsSlice.reducer;
