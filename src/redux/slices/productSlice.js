import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice 

export const { setProducts, setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;