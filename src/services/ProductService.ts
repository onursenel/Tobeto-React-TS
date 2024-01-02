import axios from 'axios';
import { GetAllProductsModels } from './../models/responses/GetAllProductsModels';
import { ProductModel } from '../models/responses/ProductModel';



class ProductService {
    getAll(){
        return axios.get<GetAllProductsModels>("https://dummyjson.com/products");
    }
    getById(id:number)
    {
        return axios.get<ProductModel>("https://dummyjson.com/products/" + id)
    }
}

export default ProductService;