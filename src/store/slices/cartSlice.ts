import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/responses/ProductModel";




interface CartItem{
    product : ProductModel;
    quantity : number;
}


const getInitialState = ()=> {
    return {
        cartItems : (JSON.parse(localStorage.getItem("cart")!) || []) as CartItem[],
    }
}

const carSlice = createSlice({
    name : "cart",
    initialState : getInitialState(),
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
            localStorage.setItem("cart",JSON.stringify(state.cartItems))


           
        },
        removeFromCart : (state,action)=>{
            state.cartItems = state.cartItems.filter((i:any) => i.id !== action.payload.id);
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

        },
        clearCart : state => {
            state.cartItems = [];
            localStorage.setItem("cart",JSON.stringify(state.cartItems))

        }




    },
});


export const cartReducer = carSlice.reducer;
//export const cartActions = carSlice.actions;
export const {addToCart, removeFromCart , clearCart} = carSlice.actions; // bir üstteki export yönteminin alternatifi