import axios from "axios";
import { useEffect, useState } from "react"
import { GetAllProductsModels } from "../../models/responses/GetAllProductsModels";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";


type Props = {}

const Homepage = (props: Props) => {
    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
      
    fetchProducts();
  
    }, [])

    //service kullanımı
    //1- Birden fazla noktada kullanılabilir.
    //2- sorumlulugun UI dosyası üzerinden kalkması
    //3-Ortak bir noktadan yönetebilmek için


    const fetchProducts= () => {
        let service:ProductService = new ProductService();
        service.getAll().then(response => {
            setProducts(response.data.products);
        })
         
    };



  return (
    <div className="container">
        <div className="row">
            {products.map(product => <div key={product.id} className="col-3">
                <ProductCard product={product} />
            </div>)}
        </div>
    </div>
  )
}

export default Homepage