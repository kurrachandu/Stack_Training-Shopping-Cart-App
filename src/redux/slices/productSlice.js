import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice ({
    name : "products",
    initialState : [],
    reducers : {
        setProducts: (state, action) => {
            state.products = action.payload;
          },
          setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
          },
          addItem: (state, action) => {
            const newItem = action.payload;
            state.products.push(newItem);
          },

    }
});

export const { setProducts, setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;










// const initialState = {
//   products: [],
//   searchKeyword: '',
// };

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//         state.products = action.payload;
//       },
//       setSearchKeyword: (state, action) => {
//         state.searchKeyword = action.payload;
//       },
//       addItem: (state, action) => {
//         const newItem = action.payload;
//         state.products.push(newItem);
//       },
    
//   },
// });

// export const { setProducts, setSearchKeyword } = productSlice.actions;
// export default productSlice.reducer;
