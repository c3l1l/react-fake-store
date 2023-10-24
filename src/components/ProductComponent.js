
function ProductComponent({product}){

    const addBasket=()=>alert("Product added to Basket!");
    return (
        <>
        <div  className="card text-center m-4" style={{width:"18rem", height:"20rem", float:"left"}}>
                    <img src={product.image} className="card-img-top" style={{display:"block", margin:"auto",width:"100px", height:"100px"}} alt="..." />
                    <div className="card-body">
                        <div className="card-title" style={{fontWeight:"bold"}}>{product.title}</div>
                        <p className="card-text text-truncate">{product.description}</p>
                    </div>
                    <div className="text-center" style={{fontWeight:"bold", color:"red"}}>Price:{product.price}£</div>
                    <button onClick={addBasket} className="btn btn-outline-success">Add to Basket</button>
                </div>
        </>
    );
}

export default ProductComponent;