import React, { useEffect, useState } from "react";
import Card from "./Card";
import './ReactStyle.css'

const Category = ({ Alldata, Item, SetCart, ClickToAnotherPage }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("All Category");

  useEffect(()=>{
    return setData(Item)
  },[])

  
  const allValues = [...new Set(Alldata.map((val) => val.category))];

  const handleClick = (btnProps) => {
    if(btnProps){
      const result = Alldata.filter((val) => {
        setName(btnProps)
        return val.category === btnProps;
      });
      setData(result);
    }
    else{
      setData(Alldata)
    }
  };

  return (
    <div className="container">
      <div className="row ">
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
      {`(${data.length} of ${Item.length} items)`}
      <div className="container mt-5 ">
        <div className="row gridSystemOnMedia d-flex justify-content-around m-1">
          {data.map((value, index) => {
            return (
              <Card key={index} SetCart={SetCart} value={value} ClickToAnotherPage={ClickToAnotherPage} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
