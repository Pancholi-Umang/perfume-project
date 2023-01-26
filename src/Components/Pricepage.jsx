import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";

const Pricepage = ({ PriceDetailsPage,showProductPage, }) => {
  const {name} = showProductPage;
 
  let navigate = useNavigate();
  const goBackFunc = () => {
    navigate(`/product/${name}`)
  }

  const [NameCard, setNameCard] = useState("");
    const [CardNumber, setCardNumber] = useState("");
    const [Expiary, setExpiary] = useState("");
    const [Cvv, setCvv] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [PinCode, setPinCode] = useState("");
    const [States, setStates] = useState("");
    const [Show,setShow]= useState(false);

    const PricePageNuForm = () => {
      if(NameCard.length >= 5 || NameCard.length <= 30){
        setShow(true);
      }
      else{
        setShow(false)
      }

      if(CardNumber.length === 16){
        setShow(true);
      }
      else if(CardNumber.length <= 16 || CardNumber.length >= 16){
        setShow(false)
      }

      if(Expiary.length === 4){
        setShow(true);
      }
      else if(Expiary.length !== 4){
        setShow(false)
      }


      if(Cvv.length === 3){
        setShow(true);
      }
      else if(Cvv.length !== 3){
        setShow(false)
      }


      if(Address.length <= 100){
        setShow(true);
      }
      else if(Address.length >= 100 || Address.length === 0){
        setShow(false)
      }


      if(City.length <= 10){
        setShow(true);
      }
      else if(City.length >= 10 || City.length === 0){
        setShow(false)
      }


      if(PinCode.length === 6){
        setShow(true);
      }
      else {
        setShow(false)
      }


      if(States.length <= 10){
        setShow(true);
      }
      else if(States.length >= 10 || States.length === 0){
        setShow(false)
      }

   }

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
              
              <input
                type="text"
                name="name"
                className="form-control"
                required="required"
                autoComplete="off"
                value={NameCard}
                onChange={(e)=>setNameCard(e.target.value)}
              />
              <span>Name on card</span>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="inputbox mt-3 mr-2">
                  
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required="required"
                    autoComplete="off"
                    value={CardNumber}
                    onChange={(e)=>setCardNumber(e.target.value)}
                  />
                  <i className="fa fa-credit-card"></i> <span>Card Number</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-row">
                  <div className="inputbox mt-3 mr-2">
                    
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      autoComplete="off"
                      value={Expiary}
                      onChange={(e)=>setExpiary(e.target.value)}
                    />
                    <span>Expiry Year</span>
                  </div>

                  <div className="inputbox mt-3 mr-2">
                    
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      autoComplete="off"
                      value={Cvv}
                      onChange={(e)=>setCvv(e.target.value)}
                    />
                    <span>CVV</span>
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
                      name="name"
                      className="form-control"
                      required="required"
                      autoComplete="off"
                      value={Address}
                      onChange={(e)=>setAddress(e.target.value)}
                    />
                    <span>Street Address</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      autoComplete="off"
                      value={City}
                      onChange={(e)=>setCity(e.target.value)}
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
                      name="name"
                      className="form-control"
                      required="required"
                      autoComplete="off"
                      value={States}
                      onChange={(e)=>setStates(e.target.value)}
                    />
                    <span>State/Province</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                      autoComplete="off"
                      value={PinCode}
                      onChange={(e)=>setPinCode(e.target.value)}
                    />
                    <span>Zip code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="mt-4 mb-4 d-flex justify-content-between">
              <span><button className="btn btn-danger clorW" onClick={goBackFunc}>Back</button></span>
              {
                Show ? (<Link to="/invoice" onClick={PricePageNuForm} className="btn btn-success px-3" >PAY ₹{PriceDetailsPage}</Link>) : (<button onClick={PricePageNuForm} className="btn btn-success px-3" >PAY ₹{PriceDetailsPage}</button>)
              }
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
              <a href="#" className="yellow decoration">
                Know all the features
              </a>

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
