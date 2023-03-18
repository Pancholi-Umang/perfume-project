import React, { useState, useEffect } from "react";
import Card from "./Card";
import Footer2 from "./Footer2";
import axios from "axios";

function AllProduct() {
  const [data, setData] = useState([]);
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const baseURL = "https://shine-perfumes-default-rtdb.firebaseio.com/items.json/";
  const GetData = () => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      setItems(response.data);
    })
  }

  useEffect(() => {
      GetData();
  }, [loading])

  const changeHandler = (e) => {
    var search = e.target.value;
    const myFilter = Items.filter((es) => {
      return es.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(myFilter);
  };

  return (
    <div className="container OnPaddingRight ">
      <div className="col-md-10 mb-3 container px-1">
        <input type="text" className="setWidthWithMedia form-control" placeholder="Search Here..." onChange={changeHandler} />
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
            {data.map((value, index) => {
              return (
                <Card key={index} value={value} loading={loading} />
              );
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
