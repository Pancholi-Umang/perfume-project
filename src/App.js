import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Category from "./Components/Category";
import AllProduct from "./Components/AllProduct";
import Login from "./Login/Login";
import About from "./Section/About";
import ContactUs from "./Section/ContactUs";
import PrivacyPolicy from "./Section/PrPolicy";
import TermsCondition from "./Section/T_and_C";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Login/Registration";
import AddCart from "./Components/AddCart";
import Item from "./Items/Items";
import Product from "./Components/Product";

const LocalStorageCartItem = () => {
  let list = localStorage.getItem("ShowCartData");

  if (list) {
    return JSON.parse(localStorage.getItem("ShowCartData"));
  } else {
    return [];
  }
};

// product details page it do not lost data after refresh ====>

const ProductDetailsPage = () => {
  let list = localStorage.getItem("ProductDetailsData");

  if (list) {
    return JSON.parse(localStorage.getItem("ProductDetailsData"));
  } else {
    return [];
  }
};

function App() {
  const [data, setData] = useState([]);
  const [addToCart, setAddToCart] = useState(LocalStorageCartItem());
  const [showProductPage, setShowProductPage] = useState(ProductDetailsPage());

  useEffect(() => {
    localStorage.setItem("ShowCartData", JSON.stringify(addToCart));
  }, [addToCart]);

  useEffect(() => {
    setData(Item);
  }, []);

  const SetCart = (CartItem) => {
    setAddToCart([...addToCart, CartItem]);
  };

  // -------> product Details vala page nu chhe <------

  useEffect(() => {
    localStorage.setItem("ProductDetailsData", JSON.stringify(showProductPage));
  }, [showProductPage]);

  const ClickToAnotherPage = (e) => {
    setShowProductPage(e);
  };

  const emptyCart = () => {
    setAddToCart([]);
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
        <Header size={addToCart.length} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/category"
            element={
              <Category
                Alldata={data}
                SetCart={SetCart}
                ClickToAnotherPage={ClickToAnotherPage}
              />
            }
          />
          <Route
            exact
            path="/allproduct"
            element={
              <AllProduct
                data={data}
                SetCart={SetCart}
                changeHandler={changeHandler}
                ClickToAnotherPage={ClickToAnotherPage}
              />
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reg" element={<Registration />} />
          <Route
            exact
            path="/cart"
            element={
              <AddCart
                addToCart={addToCart}
                size={addToCart.length}
                deleteItems={deleteItems}
                emptyCart={emptyCart}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms" element={<TermsCondition />} />
          <Route
            exact
            path={`/product/:Productname`}
            element={
              <Product showProductPage={showProductPage} SetCart={SetCart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
