import axios from "axios";
import { useEffect, useState } from "react"
import { GetAllProductsModels } from "../../models/responses/GetAllProductsModels";
import { ProductModel } from "../../models/responses/ProductModel";


type Props = {}

const Homepage = (props: Props) => {
    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
      
    fetchProducts();
  
    }, [])
    



    const fetchProducts= () => {
        //axios
        axios.get<GetAllProductsModels>("https://dummyjson.com/products").then(response => {
            setProducts(response.data.products)
        })
        
    }



  return (
    <div className="container">
        <div className="row">
            {products.map(product => <div key={product.id} className="col-3">1</div>)}
        </div>
    </div>
  )
}

export default Homepage