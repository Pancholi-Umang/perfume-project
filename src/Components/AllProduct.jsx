import React from "react";
import Card from "./Card";
import Footer from "./Footer";

function AllProduct({ data, changeHandler, SetCart, ClickToAnotherPage }) {
  return (
    <div className="container OnPaddingRight ">
      <div className="col-md-10 container px-1">
        <input
          type="text"
          className="setWidthWithMedia form-control"
          placeholder="Search Here..."
          onChange={changeHandler}
        />
      </div>

      <div className="container">
        <div className="row d-flex justify-content-around mt-2 ">
          {data.map((value, index) => {
            return (
              <Card
                key={index}
                SetCart={SetCart}
                ClickToAnotherPage={ClickToAnotherPage}
                value={value}
              />
            );
          })}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default AllProduct;
