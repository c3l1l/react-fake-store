import { createContext, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "./product";

export const SearchContext=createContext();

function Layout() {
         const [search,setSearch]=useState("");
        const searchProduct=(e)=>{
            e.preventDefault();
            console.log(search+"in layout");
        };
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Fake E-Store </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/products" >Products</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/categories/electronics">Electronics</Link></li>
                                    <li><Link className="dropdown-item" to="/categories/jewelery">Jewelery</Link></li>
                                    <li><Link className="dropdown-item" to="/categories/men's clothing">Men's Clothing</Link></li>
                                    <li><Link className="dropdown-item" to="/categories/women's clothing">Women's Clothing</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/products">All Products</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/login" >Login</Link>
                            </li>
                        </ul>
                            <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}  className="form-control me-2 w-25" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            </nav>
        <SearchContext.Provider value={search}>
            <Outlet />
        </SearchContext.Provider>
        </>
    );
}

export default Layout;