import axios from "axios";
import { useState,useEffect } from "react";
function Product() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data));

    },[])
    return (
        <>
  <div className="container mt-4">
        {
            products.map((product,index)=>(

                <div  className="card text-center m-4" style={{width:"18rem", height:"20rem", float:"left"}}>
                    <img src={product.image} className="card-img-top" style={{display:"block", margin:"auto",width:"100px", height:"100px"}} alt="..." />
                    <div className="card-body">
                        <div className="card-title" style={{fontWeight:"bold"}}>{product.title}</div>
                        <p className="card-text text-truncate">{product.description}</p>
                    </div>
                    <div className="text-center" style={{fontWeight:"bold", color:"red"}}>Price:{product.price}£</div>
                    <button className="btn btn-outline-success">Sepete Ekle</button>
                </div>

            ))
        }
            </div>
        </>
    );
}

export default Product;