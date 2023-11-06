import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import Product from './pages/product';
import Login from './pages/login';
import Category from './pages/category';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="products" element={<Product/>} />
              <Route path="categories/electronics" element={<Category category="electronics"/>} />
              <Route path="categories/jewelery" element={<Category category="jewelery"/>} />
              <Route path="categories/men's clothing" element={<Category category="men's clothing"/>} />
              <Route path="categories/women's clothing" element={<Category category="women's clothing"/>} />
            </Route>

            <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
