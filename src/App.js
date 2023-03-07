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
import Product from "./Components/Product";
import Pricepage from "./Components/Pricepage";
import Invoice from "./PaymentGetWay/Invoice";
import scrollTopButton from "./Assets/other/scrollToTopIcon.png";

function App() {

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisisblity = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisisblity);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisisblity);
    };
  }, []);

  const handleClickToScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="container mt-2 mb-2">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={ <Category/> }  />
          <Route exact path="/allproduct" element={ <AllProduct /> }/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reg" element={<Registration />} />
          <Route exact path="/cart" element={ <AddCart/> }/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms" element={<TermsCondition />} />
          <Route exact path="/product/:Productname/:Productid"  element={ <Product/> } />
          <Route exact path="/paymentgetway/:productname/:totalprice" element={ <Pricepage/> } />
          <Route exact path="/invoice/:productname/:totalprice" element={ <Invoice/> } />
        </Routes>
      </BrowserRouter>

      {/* scroll button */}
      {showButton && (
        <div className={`scrollToTop`}>
          <button className="position-fixed bottom-0 end-0 z-50 border-0 curser-pointer p-1" onClick={handleClickToScroll}>
            <img src={scrollTopButton} alt="updownArrow" />
          </button>
        </div>
      )}

    </div>
  );
}

export default App;

