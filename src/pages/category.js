import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProductComponent from "../components/ProductComponent";
import { SearchContext } from "./layout";

function Category({category}){
const [isLoading,setIsLoading]=useState(true);
const [products,setProducts]=useState([]);
const search=useContext(SearchContext);


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res)=>setProducts(res.data))
        .finally(()=>setIsLoading(false));

        console.log(category);
    },[category]);
    const filteredProducts=products.filter((product)=>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredProducts);
    return (
        <>
        <div className="container mt-4">

        <h4 className="text-info">Categories {category}</h4>
        {
            filteredProducts.map((product)=>(
                <ProductComponent product={product} />
            ))
        }
        </div>
        </>
    );
}

export default Category;