import React, { useState } from "react";
import Card from "./Card";
import './ReactStyle.css'

const Category = ({Alldata,SetCart}) => {
  const [data, setData] = useState([]);

  const allValues = [...new Set(Alldata.map((val) => val.category))];
  console.log(allValues);

  const handleClick = (btnProps) => {
    console.log(btnProps)
    if (!btnProps) {
      return setData([]);
    }
    const result = Alldata.filter((val) => {
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
            <Card key={index} SetCart={SetCart} value={value}/>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
