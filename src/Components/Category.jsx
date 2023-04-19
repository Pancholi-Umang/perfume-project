import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer2 from "./Footer2";
import './ReactStyle.css' 
import { useDispatch, useSelector } from "react-redux";
import { getAllPerfume, categoryFetch } from "../redux/action";

const Category = () => {
  const [name, setName] = useState("All Category");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  const PerfumesData = useSelector((state) => state.item.products);
  const filterItem = useSelector((state)=>state.item.category)


  var AllPerfumeItem = [];
  for (let key in PerfumesData) {
    AllPerfumeItem.push(Object?.assign(PerfumesData[key], { id: key }));
  }

  var FilterCategory = [];
  for (let key in filterItem) {
    FilterCategory.push(Object?.assign(filterItem[key], { id: key }));
  }

  
  const allValues = [...new Set(AllPerfumeItem?.map((val) => val?.category))];

  const handleClick = (btnProps) => {
    if(btnProps){
      const result = AllPerfumeItem.filter((val) => {
        setName(btnProps)
        return val.category === btnProps;
      });
      dispatch(categoryFetch(result));
    }
    else{
      dispatch(categoryFetch(AllPerfumeItem))
    }
  };

  useEffect(() => {
    if (AllPerfumeItem?.length === 0) {
      dispatch(getAllPerfume())
    }
    dispatch(categoryFetch(AllPerfumeItem));
  }, [PerfumesData]);

  return (
    <div className="container">
      <div className="row">
        <div className="dropdown col-md-3 col-sm-4">
          <button className="btn btn-secondary dropdown-toggle col-md-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {name?.toUpperCase()}
          </button>
          <ul className="dropdown-menu">
            {allValues?.map((getVal, index) => {
              return (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleClick(getVal)}>
                  {getVal?.toUpperCase()}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      {`(${FilterCategory?.length} of ${AllPerfumeItem?.length} itemss)`}
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
          {FilterCategory?.map((value, index) => {
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
