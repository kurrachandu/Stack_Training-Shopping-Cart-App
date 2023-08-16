import { createSlice, } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers: {
        addItem: (state, action) => {
        const itemIndex = state.findIndex((item) => item.props.id === action.payload.props.id);
            if(itemIndex === -1)
            {
                state.push({...action.payload, quantity: 1});
            }
            else{
                state[itemIndex].quantity += 1;
            }
        },
        removeItem: (state, action) => {
            const itemIndex = state.findIndex((item)=> item.props.id === action.payload.props.id);
                console.log(itemIndex);
        if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
        }
        },
        incItem: (state, action) => {
            const itemIndex = state.findIndex((item)=> item.props.id === action.payload.props.id);
            if (itemIndex !== -1)
            {
                state[itemIndex].quantity += 1;
            }
            else {
        state.push({...action.payload.props, quantity:1 });
            }
        },
        decItem : (state, action) => {
        const itemIndex = state.findIndex((item) => item.props.id === action.payload.props.id);
            console.log(itemIndex);
            if (itemIndex !== -1) {
                state[itemIndex].quantity += -1;
             if(state[itemIndex].quantity === 0)
             {
               state.splice(itemIndex, 1);
             }
            }
        },
        },
})  ;

export const { addItem, removeItem, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;