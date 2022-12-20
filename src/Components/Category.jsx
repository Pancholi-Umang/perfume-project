import React, { useState } from "react";
import Item from "../Items/Items";

const allValues = [...new Set(Item.map((val) => val.category))];
console.log(allValues);

const Category = () => {
  const [data, setData] = useState([]);
  // const [toggle , setToggle] = useState(false);

  const handleClick = (btnProps) => {
    if (!btnProps) {
      return setData([]);
    }
    const result = Item.filter((val) => {
      return val.category === btnProps;
    });
    setData(result);
  };

  

  console.log(data);
  return (
    <div className="container mt-5 ">
      <div className="row makeAround">
        {allValues.map((getVal, index) => {
          return (
            <button
              key={index}
              className="btn btn-secondary mx-2 makingRoundedIcon"
              onClick={() => handleClick(getVal)}
            >
              {getVal}
            </button>
          );
        })}
      </div>
      <div className="row korimen">
        {data.map((value, index) => {
          return (
            <div className="col-md-3 card g-5 p-0" key={index}>
              <img className="img myCardImage" src={value.imag} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title text-center">{value.name}</h5>
                <p className="card-text">{value.description}</p>
                <p className="card-text">{value.category}</p>
                <p className="card-text text-center"><strong>{value.price}₹</strong></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
