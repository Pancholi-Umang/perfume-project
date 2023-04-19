import React, { useState, useEffect } from "react";
import Card from "./Card";
import Footer2 from "./Footer2";
import { useDispatch, useSelector } from "react-redux";
import { getAllPerfume, filterData } from "../redux/action";
// ====> (useSelector)  state.store.reducer

function AllProduct() {
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  
  const PerfumesData = useSelector((state) => state?.item?.products);
  const filterItem = useSelector((state)=>state?.item?.filter)
 
 
  
  var FILTERING = [];
  for (let key in filterItem) {
    FILTERING?.push(Object?.assign(filterItem[key], { id: key }));
  }

  var AllPerfumeItem = [];
  for (let key in PerfumesData) {
    AllPerfumeItem?.push(Object?.assign(PerfumesData[key], { id: key }));
  }

  const changeHandler = (e) => {
    var search = e?.target?.value;
    const myFilter = AllPerfumeItem?.filter((es) => {
      return es?.name?.toLowerCase()?.includes(search?.toLowerCase());
    });
    dispatch(filterData(myFilter))
  };
  
  const RangingFilter = (e) => {
    var price = e?.target?.value;
    setPriceRange(e?.target?.value);
    const FilterPriceRange = AllPerfumeItem?.filter((es) => {
      return price >= es?.price;
    });
    dispatch(filterData(FilterPriceRange))
  };
  
  useEffect(() => {
    if (AllPerfumeItem.length === 0) {
      dispatch(getAllPerfume())
    }
    dispatch(filterData(AllPerfumeItem));
  }, [PerfumesData]);


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
            {FILTERING?.map((value, index) => {
              return <Card key={index} value={value} />;
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
