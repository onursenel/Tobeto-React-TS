import axios from "axios";
import { useEffect } from "react"
import { GetAllProductsModels } from "../../models/responses/GetAllProductsModels";


type Props = {}

const Homepage = (props: Props) => {

    useEffect(() => {
      
    fetchProducts();
  
    }, [])
    



    const fetchProducts= () => {
        //axios
        axios.get<GetAllProductsModels>("https://dummyjson.com/products").then(response => {
            console.log(response.data.products);
        })
    }



  return (
    <div className="container">
        <div className="row">
            <div className="col-3">
                
            </div>
        </div>
    </div>
  )
}

export default Homepage