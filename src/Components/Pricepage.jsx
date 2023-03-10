import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCreditCardValidator } from "react-creditcard-validator";
import axios from "axios";
import { useParams } from "react-router-dom";

const Pricepage = () => {
  const { productname, totalprice } = useParams();

  const [cardDetails, setCardDetails] = useState({
    CardOnName: "",
    Address: "",
    City: "",
    PinCode: "",
    State: "",
  });

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

  const [isDisabled, setDisabled] = useState(false);

  const PricePageNuForm = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
    console.log(cardDetails);

    if (
      cardDetails.CardOnName.length > 0 &&
      cardDetails.Address.length > 0 &&
      cardDetails.City.length > 0 &&
      cardDetails.PinCode.length === 6 &&
      cardDetails.State.length > 0
    ) {
      axios({
        method: "post",
        url: "https://perfumeweb-60a0e-default-rtdb.firebaseio.com/invoice.json",
        data: cardDetails,
      });
      setDisabled(true);
      
    } else {
      setDisabled(false);
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
                  value={cardDetails?.CardOnName.toUpperCase()}
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
                        value={cardDetails?.City.toUpperCase()}
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
                        value={cardDetails?.State.toUpperCase()}
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

              <Link
                className={`btn btn-success px-3`}
                to={
                  isDisabled
                    ? `/invoice/${productname}/${totalprice}`
                    : `/paymentgetway/${productname}/${totalprice}`
                }
                onClick={PricePageNuForm}
              >
                PAY ???{totalprice}
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">???{totalprice}</h1>
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

export default Pricepage;
