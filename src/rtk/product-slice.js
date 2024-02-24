import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk("productReducer/fetchProduct", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})
export const productReducer = createSlice({
    initialState: [],
    name: "productReducer",
   // reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})
export default productReducer.reducer;