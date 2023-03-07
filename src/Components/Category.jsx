import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer2 from "./Footer2";
import './ReactStyle.css'
import axios from "axios";

const Category = () => {
  const [dataItem, setDataItem] = useState([]);
  const [Alldata, setAlldata] = useState([]);
  const [name, setName] = useState("All Category");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const baseURL = "https://shine-perfumes-default-rtdb.firebaseio.com/items.json/";
  const GetData = () => {
    axios.get(baseURL).then((response) => {
     setDataItem(response.data);
     setAlldata(response.data);
    })
  }

  useEffect(() => {
      GetData();
  }, [])


  
  const allValues = [...new Set(Alldata.map((val) => val.category))];

  const handleClick = (btnProps) => {
    if(btnProps){
      const result = Alldata.filter((val) => {
        setName(btnProps)
        return val.category === btnProps;
      });
      setDataItem(result);
    }
    else{
      setDataItem(Alldata)
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="dropdown col-md-3">
          <button className="btn btn-secondary dropdown-toggle col-md-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {name.toUpperCase()}
          </button>
          <ul className="dropdown-menu">
            {allValues.map((getVal, index) => {
              return (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleClick(getVal)}>
                  {getVal.toUpperCase()}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      {`(${dataItem.length} of ${Alldata.length} itemss)`}
      <div className="container mt-5 ">
      {
        loading ? (
          <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
        ) : (
          <div className="row gridSystemOnMedia d-flex justify-content-around m-1">
          {dataItem.map((value, index) => {
            return (
              <Card key={index} value={value} />
            );
          })}
        </div>
        )
      }
      </div>
      <Footer2 />
    </div>
  );
};

export default Category;
