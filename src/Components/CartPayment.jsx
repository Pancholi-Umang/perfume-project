import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreditCardValidator } from "react-creditcard-validator";
import axios from "axios";
import { useParams } from "react-router-dom";

const CartPayment = () => {
  const { totalprice } = useParams();

  const [apiData, setApiData] = useState([]);
  const [dates, setDates] = useState("");

  useEffect(() => {
    var today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setDates(date);
  }, []);

  const [cardDetails, setCardDetails] = useState({
    CardOnName: "",
    Address: "",
    City: "",
    PinCode: "",
    State: "",
    Total: totalprice,
    productname: "",
    Date: dates,
    deliveryStatus: "proceed",
  });

  useEffect(() => {
    axios
      .get(`https://addtocart-2eccb-default-rtdb.firebaseio.com/cart.json`)
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  useEffect(() => {
    var arr = [];
    for (let key in apiData) {
      arr.push(Object.assign(apiData[key], { id: key }));
    }

    let x = arr.map((val) => {
      const { name } = val;
      return name;
    });

    const StringData = x.toString();
    setCardDetails({
      ...cardDetails,
      productname: StringData,
      Date: dates,
    });
  }, [apiData]);

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  const goBackFunc = () => {
    navigate(`/`);
  };

  function expDateValidate(year) {
    if (Number(year) > 2035) {
      return "Expiry Date Year cannot be greater than 2035";
    }
    return;
  }

  const {
    getCardNumberProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator({ expiryDateValidator: expDateValidate });

  const PricePageNuForm = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });

    if (
      cardDetails.CardOnName.length > 5 &&
      cardDetails.Address.length > 10 &&
      cardDetails.City.length > 3 &&
      cardDetails.PinCode.length === 6 &&
      cardDetails.State.length > 3
    ) {
      axios
        .post(
          `https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice.json`,
          cardDetails
        )
        .then(() => {
          navigate(`/cart-invoice`);
        });
    } else {
      navigate(`/cartgetway/${totalprice}`);
    }
  };

  return (
    <div>
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                <label>Name On Card</label>
                <input
                  type="text"
                  name="CardOnName"
                  className="form-control"
                  autoComplete="off"
                  value={cardDetails?.CardOnName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    <input
                      type="text"
                      name="CardOnNumber"
                      className="form-control"
                      required
                      autoComplete="off"
                      {...getCardNumberProps()}
                    />
                    <i className="fa fa-credit-card"></i>
                    <small>
                      {erroredInputs?.cardNumber && erroredInputs?.cardNumber}
                    </small>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="CardOnExpiary"
                        className="form-control"
                        required
                        autoComplete="off"
                        {...getExpiryDateProps()}
                      />
                      <small>
                        {erroredInputs?.expiryDate && erroredInputs?.expiryDate}
                      </small>
                    </div>

                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="CardOnCvv"
                        className="form-control"
                        required
                        autoComplete="off"
                        {...getCVCProps()}
                      />
                      <small>{erroredInputs?.cvc && erroredInputs?.cvc}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="Address"
                        className="form-control"
                        required
                        autoComplete="off"
                        value={cardDetails?.Address}
                        onChange={handleChange}
                      />
                      <span>Street Address</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="City"
                        className="form-control"
                        required
                        autoComplete="off"
                        value={cardDetails?.City}
                        onChange={handleChange}
                      />
                      <span>City</span>
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="State"
                        className="form-control"
                        required
                        autoComplete="off"
                        value={cardDetails?.State}
                        onChange={handleChange}
                      />
                      <span>State/Province</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        type="text"
                        name="PinCode"
                        className="form-control"
                        required="required"
                        autoComplete="off"
                        value={cardDetails?.PinCode}
                        onChange={handleChange}
                      />
                      <span>Zip code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex justify-content-between">
              <span>
                <button className="btn btn-danger clorW" onClick={goBackFunc}>
                  Back
                </button>
              </span>

              <button
                className={`btn btn-success px-3`}
                onClick={PricePageNuForm}
              >
                PAY ₹{totalprice}
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">₹{totalprice}</h1>
              </div>

              <span>
                Enjoy all the features and perk after you complete the payment
              </span>

              <div className="hightlight">
                <span>
                  100% Guaranteed support and update for the next 5 Days.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
