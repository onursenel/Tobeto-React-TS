
//her state bir initial state sahip olmalıdır
const initialState = {
    cartItems:[],
}

//Reducer'lar 2 adet parametre alırlar!
//state => deponun o anki durumu 
//action => tetiklenen aksiyon bilgileri
export const cartReducer = (state:any = initialState , action : any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            //State is immutable.(State Değişmez)
            //state.cartItems.push(action.payload);
            let newAddState = {
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
            return newAddState;
        case "REMOVE_TO_CART":
            let newRemoveState = {
                ...state,
                cartItems : state.cartItems.filter((i:any) => i.id !== action.payload.id)
            }
            return newRemoveState;
        case "CLEAR_CART":
            let newClearState ={
                ...state,
                cartItems : []
            };
            return newClearState;
        default:
            return state;
    }
}
//Store History
//Hata Yönetimi