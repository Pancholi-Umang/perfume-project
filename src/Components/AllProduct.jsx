import React, { useState, useEffect } from "react";
import Card from "./Card";
import Footer2 from "./Footer2";
import axios from "axios";

function AllProduct() {
  const [data, setData] = useState([]);
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState(0)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const baseURL = "https://listofallperfumes-default-rtdb.firebaseio.com/items.json/";
  const GetData = () => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      setItems(response.data);
    });
  };

  useEffect(() => {
    GetData();
  }, [loading]);

  var DATAarr = [];
  for (let key in data) {
    DATAarr.push(Object.assign(data[key], { id: key }));
  }

  var ITEMSarr = [];
  for (let key in Items) {
    ITEMSarr.push(Object.assign(Items[key], { id: key }));
  }

  const changeHandler = (e) => {
    var search = e.target.value;
    const myFilter = ITEMSarr.filter((es) => {
      return es.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(myFilter);
  };

  const RangingFilter = (e) => {
    var price = e.target.value;
    setPriceRange(e.target.value);
    const FilterPriceRange = ITEMSarr.filter((es) => {
      return price >= es.price;
    });
    setData(FilterPriceRange);
  };

  return (
    <div className="container OnPaddingRight ">
      <div className="row d-flex align-items-center justify-content-center my-2">
        <div className="col-md-4 container">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Search Here..."
            onChange={changeHandler}
          />
        </div>
        <div className="col-md-4 col-sm-12 mt-1 container">
          <div className="slidecontainer d-flex">
          <span className="rounded-start makeRoundedButton">₹{priceRange}</span>
          <input type="range" min="110" max="1500" onChange={RangingFilter} className="slider rounded-end" id="myRange" />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-around change-data ">
            {DATAarr?.map((value, index) => {
              return <Card key={index} value={value} loading={loading} />;
            })}
          </div>
        </div>
      )}

      <hr />
      <Footer2 />
    </div>
  );
}

export default AllProduct;
