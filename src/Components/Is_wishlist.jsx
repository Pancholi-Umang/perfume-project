import axios from "axios";
import React, { useState, useEffect } from "react";
import "./wishlist.css";

const Is_wishlist = () => {
  const [wishList, setWishList] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const GiveData = (value, num) => {
    let Numbers = Number(num);
    axios.put(
      `https://shine-perfumes-default-rtdb.firebaseio.com/items/${Numbers}.json`,
      {
        category: value.category,
        description: value.description,
        name: value.name,
        imag: value.imag,
        price: value.price,
        id: Numbers,
        quantity: Number(1),
        is_wishlist: "false",
        status: "false",
      }
    );
  };

  function setDataFunction() {
    const baseURL = `https://is-wishlist-default-rtdb.firebaseio.com/wish.json`;
    axios.get(baseURL).then((response) => {
      setWishList(response.data);
    });
  }
  useEffect(() => {
    setDataFunction();
  }, []);

  const deleteItems = (value) => {
    let number = "";
    axios
      .get(
        `https://is-wishlist-default-rtdb.firebaseio.com/wish/${value.id}/id.json`
      )
      .then((response) => {
        console.log(response);
        number = response.data;
      });
    const DeleteCardData = axios.delete(
      `https://is-wishlist-default-rtdb.firebaseio.com/wish/${value.id}.json`
    );
    DeleteCardData?.then(() => {
      GiveData(value, number);
      setDataFunction();
    });
    setWishList(DeleteCardData);
  };

  var arr = [];
  for (let key in wishList) {
    arr.push(Object.assign(wishList[key], { id: key }));
  }

  return (
    <div className="cart-wrap">
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
          <div className="row">
            <div className="col-md-12">
              <div className="main-heading mb-10">My wishlist</div>
              <div className="table-wishlist">
                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                  <thead>
                    <tr className="border-0">
                      <th className="text-center">Wishlist Products</th>
                      <th className="text-center">Unit Price</th>
                      <th className="text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((values, index) => {
                      const { name, imag, price } = values;
                      return (
                        <tr key={index}>
                          <td>
                            <div className="display-flex align-center justify-content-around">
                              <div className="img-product">
                                <img
                                  src={imag}
                                  alt="Loading Image"
                                  className="mCS_img_loaded"
                                />
                              </div>
                              <div className="ml-3 name-product">{name}</div>
                            </div>
                          </td>
                          <td className="price">₹{price}</td>
                          <td>
                            <span
                              className="in-stock-box pointerClass"
                              onClick={() => deleteItems(values)}
                            >
                              Remove
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Is_wishlist;
