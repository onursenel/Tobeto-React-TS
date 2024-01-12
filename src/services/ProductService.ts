
import { GetAllProductsModels } from './../models/responses/GetAllProductsModels';
import { ProductModel } from '../models/responses/ProductModel';
import axiosInstance from '../utils/axiosInterceptors';



class ProductService {
    getAll(){
        return axiosInstance.get<GetAllProductsModels>("products");
    }
    getById(id:number)
    {
        return axiosInstance.get<ProductModel>("products/" + id)
    }
}

export default ProductService;