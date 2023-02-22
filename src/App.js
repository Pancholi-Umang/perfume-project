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
import Pricepage from "./Components/Pricepage";
import Invoice from "./PaymentGetWay/Invoice";

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

// payment getway page it do not lost data after refresh ====>

const paymentGetwayPage = () => {
  let list = localStorage.getItem("PayementGetway");

  if (list) {
    return JSON.parse(localStorage.getItem("PayementGetway"));
  } else {
    return [];
  }
};

// CardPayment (PricePage) details save to invoice page

const PricePageToSaveCardDetails = () => {
  let list = localStorage.getItem("PricePageToInvoicePage");

  if (list) {
    return JSON.parse(localStorage.getItem("PricePageToInvoicePage"));
  } else {
    return [];
  }
};

function App() {
  const [data, setData] = useState([]);
  const [addToCart, setAddToCart] = useState(LocalStorageCartItem());
  const [showProductPage, setShowProductPage] = useState(ProductDetailsPage());
  const [PriceDetailsPage, setPriceDetailsPage] = useState(paymentGetwayPage());

  const [cardDetails, setCardDetails] = useState(
    PricePageToSaveCardDetails({
      CardOnName: "",
      Address: "",
      City: "",
      PinCode: "",
      State: "",
    })
  );

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const trackingNum = Math.floor(Math.random() * 122000000);
  const invoiceNum = Math.floor(Math.random() * 10000);

  useEffect(() => {
    localStorage.setItem("ShowCartData", JSON.stringify(addToCart));
  }, [addToCart]);

  useEffect(() => {
    setData(Item);
  }, []);

  const SetCart = (CartItem) => {
    setAddToCart([...addToCart, CartItem]);
  };

  // ------> product Details vala page nu chhe <------

  useEffect(() => {
    localStorage.setItem("ProductDetailsData", JSON.stringify(showProductPage));
  }, [showProductPage]);

  // useEffect(() => {
  //   setCardDetails({
  //     CardOnName: "",
  //     Address: "",
  //     City: "",
  //     PinCode: "",
  //     State: "",
  //   });
  // }, [showProductPage]);

  const ClickToAnotherPage = (e) => {
    setShowProductPage(e);
    cardDetails.CardOnName = "";
    cardDetails.Address = "";
    cardDetails.City = "";
    cardDetails.PinCode = "";
    cardDetails.State = "";
  };

  useEffect(() => {
    localStorage.setItem("PricePageToInvoicePage", JSON.stringify(cardDetails));
  }, [cardDetails]);

  useEffect(() => {
    localStorage.setItem("PricePageToInvoicePage", JSON.stringify(cardDetails));
  }, []);

  // ------> payment Getway vala page ni price only chhe <------

  useEffect(() => {
    localStorage.setItem("PayementGetway", JSON.stringify(PriceDetailsPage));
  }, [PriceDetailsPage]);

  function ShowPriceDetails(e) {
    setPriceDetailsPage(e);
  }

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

  // =====> Quantity Button Valu Chhe
  let [valueQuantity, setValQuantity] = useState(1);

  useEffect(() => {
    return setValQuantity(1);
  }, [showProductPage]);

  function plusing(id) {
    console.log(id,"id");
    if (valueQuantity < 999) {
      setValQuantity(valueQuantity + 1);
    } else {
      setValQuantity(999);
    }
  }

  function minusing() {
    if (valueQuantity > 1) {
      setValQuantity(valueQuantity - 1);
    } else {
      setValQuantity(1);
    }
  }

  // ====> End Quantity BUtton

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
                Item={Item}
              />
            }
          />
          <Route
            exact
            path="/allproduct"
            element={
              <AllProduct
                changeHandler={changeHandler}
                data={data}
                SetCart={SetCart}
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
                valueQuantity={valueQuantity}
                deleteItems={deleteItems}
                emptyCart={emptyCart}
                plusing={plusing}
                minusing={minusing}
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
              <Product
                showProductPage={showProductPage}
                SetCart={SetCart}
                valueQuantity={valueQuantity}
                plusing={plusing}
                minusing={minusing}
                ShowPriceDetails={ShowPriceDetails}
              />
            }
          />
          <Route
            exact
            path="/paymentgetway"
            element={
              <Pricepage
                handleChange={handleChange}
                setCardDetails={setCardDetails}
                cardDetails={cardDetails}
                showProductPage={showProductPage}
                PriceDetailsPage={PriceDetailsPage}
              />
            }
          />
          <Route
            exact
            path="/invoice"
            element={
              <Invoice
                invoiceNum={invoiceNum}
                trackingNum={trackingNum}
                showProductPage={showProductPage}
                PriceDetailsPage={PriceDetailsPage}
                setCardDetails={setCardDetails}
                cardDetails={cardDetails}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
