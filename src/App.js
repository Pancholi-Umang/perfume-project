import React,{useState,useEffect} from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Category from "./Components/Category";
import AllProduct from "./Components/AllProduct";
import Login from "./Login/Login";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Login/Registration";
import AddCart from "./Components/AddCart";
import Item from './Items/Items'

const LocalStorageCartItem = () => {
  let list = localStorage.getItem("ShowCartData");

  if (list) {
    return JSON.parse(localStorage.getItem("ShowCartData"));
  } else {
    return [];
  }
};

function App() {
  const [data, setData] = useState([]);
  const [addToCart, setAddToCart] = useState(LocalStorageCartItem());
  const [boolState, setBoolState] = useState(true);

  useEffect(() => {
    localStorage.setItem("ShowCartData", JSON.stringify(addToCart));
  }, [addToCart]);

  useEffect(() => {
    setData(Item);
  }, []);

  const SetCart = (CartItem) => {
    setAddToCart([...addToCart, CartItem]);
    // setBoolState(false);
  };
  
  const changeHandler = (e) => {
    var search = e.target.value;
    const myFilter = Item.filter((es) => {
      return es.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(myFilter);
  };

  const deleteItems = (index) => {
        const DeleteCardData = addToCart.filter((element) => index !== element.id);
        setAddToCart(DeleteCardData);
      };

  return (
    <div className="container mt-2 mb-2">
      <BrowserRouter>
        <Header size={addToCart.length}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category" element={<Category Alldata={data} boolState={boolState} SetCart={SetCart}/>} />
          <Route exact path="/allproduct" element={<AllProduct data={data} boolState={boolState} SetCart={SetCart} changeHandler={changeHandler} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/reg" element={<Registration />} />
          <Route exact path="/cart" element={<AddCart addToCart={addToCart} deleteItems={deleteItems}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
