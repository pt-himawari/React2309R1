import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Tạo một async thunk để fetch dữ liệu từ API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://api.example.com/products");
    const data = await response.json();
    return data;
  }
);

// Tạo productSlice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice;

// Export action creator để dispatch fetchProducts
// export { fetchProducts };
