import { createSlice } from "@reduxjs/toolkit";



const carSlice = createSlice({
    name : "cart",
    initialState : {cartItems : [] as any []},
    reducers : {
        addToCart : (state,action) => {
            //immer
            state.cartItems.push(action.payload);
        },
        removeFromCart : (state,action)=>{
            state.cartItems = state.cartItems.filter((i:any) => i.id !== action.payload.id);

        },
        clearCart : state => {
            state.cartItems = [];

        }




    },
});


export const cartReducer = carSlice.reducer;