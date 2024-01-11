import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/responses/ProductModel";




interface CartItem{
    product : ProductModel;
    quantity : number;
}

const carSlice = createSlice({
    name : "cart",
    initialState : {cartItems : [] as CartItem[]},
    reducers : {
        addToCart : (state,action) => {
            //immer

            let existingItem= state.cartItems.find((i:CartItem) => i.product.id === action.payload.id); // === type kontrolü yapar ----- == ise değer kontrolü yapar 

            if(existingItem){
                //sepette bu üründen var
                existingItem.quantity++; // bu ürünü ekledikçe arttırma yapar
                
            }else {
                state.cartItems.push({product : action.payload, quantity:1});
            }


           
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
//export const cartActions = carSlice.actions;
export const {addToCart, removeFromCart , clearCart} = carSlice.actions; // bir üstteki export yönteminin alternatifi