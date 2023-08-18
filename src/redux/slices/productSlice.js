import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice ({
    name : "products",
    initialState : [],
    reducers : {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setSearchKeyword: (state, action) => {
            state.setSearchKeyword = action.payload;
        },
        addItem: (state,action) => {
            const NewItem = action.payload;
            state.products.push(NewItem);
        },
        
    }
});

export const { setProducts, setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;