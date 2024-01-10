//action tanımı

export const addToCart = (product:any) => {
    //tanım olduklarından dolayı geriye de tanım dönerler
    //Tanım
    //type => aksiyon adı
    //payload =>  eğer varsa aksiyon'un argümanları
    return {
        type: "ADD_TO_CART", payload : product};
};

export const removeToCart = (product:any) => {
    return{
        type : "REMOVE_TO_CART", payload:product};
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART"};
};