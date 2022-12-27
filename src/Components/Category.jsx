import React, { useState } from "react";
import Item from "../Items/Items";
import './ReactStyle.css'

const allValues = [...new Set(Item.map((val) => val.category))];
console.log(allValues);

const Category = () => {
  const [data, setData] = useState([]);

  const handleClick = (btnProps) => {
    console.log(btnProps)
    if (!btnProps) {
      return setData([]);
    }
    const result = Item.filter((val) => {
      return val.category === btnProps;
    });
    setData(result);
  };

  return (
    <div className="container mt-5 ">
      <div className="row makeAround">
        {allValues.map((getVal, index) => {
          return (
            <button
              key={index}
              className="btn btn-warning mx-2 mb-3 makingRoundedIcon"
              onClick={() => handleClick(getVal)}
            >
              {getVal.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div className="row korimen">
      {data.map((value, index) => {
          return (
            <div className=" mt-2 mx-1 col-md-3 myData p-1 card" key={index}>
              <img className="img myCardImage" src={value.imag} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title text-center">{value.name.toUpperCase()}&nbsp;({value.category.toUpperCase()})</h5>
                <p className="card-text text-center"><strong>{value.price}₹</strong></p>
                <p className="card-text btnAround d-flex justify-content-around p-1">
                  <button className="btn btn-secondary myChange ">BUY NOW</button>
                  <button className="btn btn-secondary myChange">ADD CART</button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
