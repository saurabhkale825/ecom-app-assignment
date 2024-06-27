import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartComponent from "./components/CartComponent";
import HomePageComponent from "./components/HomePageComponent";
import HeaderComponent from "./components/HeaderComponent";
import ECommerceContext from "./contexts/ECommerceContext";

function App() {
  const [products, setProducts] = useState([]);
  const [displayProducts , setDisplayProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter , setFilter] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log("product:",response.data.products)
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if(filter.length > 0 ){
     setDisplayProducts(products.filter((item) => (filter.includes(item.category))));
     console.log("Display product:",displayProducts);
    }
    else{
    setDisplayProducts(products);
    }
  }, [filter , products]);

  useEffect(() => {
    console.log("Filter array: ",filter);
  },[filter])


  return (
    <div className="App">
      <BrowserRouter>
        <ECommerceContext.Provider
          value={{ products, setProducts, cart, setCart ,displayProducts ,filter,  setFilter }}
        >
          <HeaderComponent />
          <Routes className="routes">
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/cart" element={<CartComponent />} />
          </Routes>
        </ECommerceContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
