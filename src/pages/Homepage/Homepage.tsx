import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import { AppDispatch } from "../../store/configureStore";



type Props = {}

const Homepage = (props: Props) => {
    // const [products, setProducts] = useState<ProductModel[]>([])

    // useEffect(() => {
      
    // fetchProducts();
  
    // }, [])

    // //service kullanımı
    // //1- Birden fazla noktada kullanılabilir.
    // //2- sorumlulugun UI dosyası üzerinden kalkması
    // //3-Ortak bir noktadan yönetebilmek için


    // const fetchProducts= () => {
    //     let service:ProductService = new ProductService();
    //     service.getAll().then(response => {
    //         setProducts(response.data.products);
    //     })
         
    // };

    const productState = useSelector((state : any)=> state.product);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchProducts())
    
    }, []);
    

  return (
    <div className="container">
        <div className="row">
            {productState.products.map((product:any) => (<div key={product.id} className="col-3">
                <ProductCard product={product} />
            </div>))}
        </div>
    </div>
  )
}

export default Homepage