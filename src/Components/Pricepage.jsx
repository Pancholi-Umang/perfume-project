import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCreditCardValidator } from "react-creditcard-validator";

const Pricepage = ({ PriceDetailsPage, showProductPage }) => {
  const { name } = showProductPage;

  let navigate = useNavigate();
  const goBackFunc = () => {
    navigate(`/product/${name}`);
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

  const [NameCard, setNameCard] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [States, setStates] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const PricePageNuForm = () => {
    
    if (  
      NameCard.length > 0 &&
      Address.length > 0 &&
      City.length > 0 &&
      PinCode.length === 6 &&
      States.length > 0
    ) {
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
                  value={NameCard.toUpperCase()}
                  onChange={(e) => setNameCard(e.target.value)}
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
                      {erroredInputs.cardNumber && erroredInputs.cardNumber}
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
                        {erroredInputs.expiryDate && erroredInputs.expiryDate}
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
                      <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
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
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
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
                        value={City.toUpperCase()}
                        onChange={(e) => setCity(e.target.value)}
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
                        value={States.toUpperCase()}
                        onChange={(e) => setStates(e.target.value)}
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
                        value={PinCode}
                        onChange={(e) => setPinCode(e.target.value)}
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

              <Link type="submit" className={`btn btn-success px-3`} to={isDisabled ? '/invoice' : '/paymentgetway'} onClick={PricePageNuForm} >
              
                PAY ₹{PriceDetailsPage}
              </Link>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">₹{PriceDetailsPage}</h1>
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
