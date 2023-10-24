import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import Product from './pages/product';
import Login from './pages/login';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="products" element={<Product/>} />
            </Route>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
