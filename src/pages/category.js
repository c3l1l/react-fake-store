import axios from "axios";
import { useEffect, useState } from "react";
import ProductComponent from "../components/ProductComponent";

function Category({category}){
const [isLoading,setIsLoading]=useState(true);
const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res)=>setProducts(res.data))
        .finally(()=>setIsLoading(false));

        console.log(category);
    },[category]);
    return (
        <>
        <div className="container mt-4">

        <h4 className="text-info">Categories {category}</h4>
        {
            products.map((product)=>(
                <ProductComponent product={product} />
            ))
        }
        </div>
        </>
    );
}

export default Category;