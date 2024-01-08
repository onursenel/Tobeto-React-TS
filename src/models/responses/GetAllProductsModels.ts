import { ProductModel } from "./ProductModel";



export interface  GetAllProductsModels{
    limit : number;
    skip:number;
    total:number;
    products: ProductModel[];
}