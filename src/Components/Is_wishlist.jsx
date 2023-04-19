import axios from "axios";
import React, { useState, useEffect } from "react";
import "./wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchWishlistData, removeWishListData, getAllPerfume } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Is_wishlist = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const dispatch = useDispatch()

  const ShowWishlist = useSelector(state => state.wishlist.wishlist)
  const GiveData = (num) => {
    let Numbers = Number(num);
    axios.patch(
      `https://listofallperfumes-default-rtdb.firebaseio.com/items/${Numbers}.json`,
      {
        is_wishlist: "false"
      }
    ).then(()=>dispatch(getAllPerfume()))
  };

  var WishListArry = [];
  for (let key in ShowWishlist) {
    WishListArry?.push(Object.assign(ShowWishlist[key], { id: key }));
  }

  useEffect(() => {
    dispatch(FetchWishlistData());
  }, [ShowWishlist]);
  const navigate = useNavigate();

  const deleteItems = (value) => {
    let number = "";
    axios.get(`https://wishlist-466aa-default-rtdb.firebaseio.com/wish/${value.id}/id.json`)
      .then((response) => {
        number = response.data;
      });
    const DeleteWishListData = axios.delete(
      `https://wishlist-466aa-default-rtdb.firebaseio.com/wish/${value.id}.json`
    );
    DeleteWishListData?.then(() => {
      const wishListValue = WishListArry?.filter((wishVal)=>{
        return wishVal.id != value.id
      })
      GiveData(number);
      dispatch(removeWishListData(wishListValue))
      dispatch(FetchWishlistData())
    });
    const NavigateManage = WishListArry.length - Number(1)
    if(NavigateManage == 0){
      setTimeout(() => navigate("/"), 1000);
    }
  };


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
                    {WishListArry?.map((values, index) => {
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
