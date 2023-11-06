import axios from "axios";
import { useState,useEffect, useContext } from "react";
import ProductComponent from "../components/ProductComponent";
import {SearchContext} from '../pages/layout';


function Product() {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const search=useContext(SearchContext);
    // const [search,setSearch]=useState("");
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data))
        .finally(()=>setLoading(false));

    },[search]);

    const filteredProducts=products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredProducts);

    console.log("search in Product"+search);
    return (
        <>
  <div className="container mt-4">
        {
            loading && <div className="text-center">Loading....</div>
        }
        {
            filteredProducts.map((product,index)=>(

                <ProductComponent product={product} />

            ))
        }
            </div>
        </>
    );
}

export default Product;