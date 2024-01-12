import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async(args,thunkAPI)=> {
    const state:any = thunkAPI.getState();
    
    if (state.product.products.length > 0
         && !(new Date().getTime()- state.product.lastFetch >6000)
        ){
        return state.product.products;
    }

    const service : ProductService = new ProductService();
    const response =await service.getAll();
    return response.data.products;
});



const productSlice = createSlice({
    name : "product",
    initialState: {loading: "initial" ,
    products: [] as any [],
    lastFetch : new Date().getTime(),
},
    reducers :{},
    extraReducers : builder => {
        builder.addCase(fetchProducts.pending,state => {
            console.log("istek atılıyor...")
            state.loading = "loading";
        });
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            console.log("cevap geldi",action)
            state.loading="loaded";
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected,state => {
            console.log("hata geldi")
            state.loading="error";
        });
    },
    });

export const productReducer = productSlice.reducer;
export const {} = productSlice.actions;