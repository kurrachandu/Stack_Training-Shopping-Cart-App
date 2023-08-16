import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice ({
    name : "products",
    initialState : [],
    reducers : {
        
    }
});

export const { setProducts, setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;