import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Category from './Components/Category';
import AllProduct from './Components/AllProduct';
import Login from "./Login/Login";
import About from './Components/About';
// import Item from './Items/Items'
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mt-2 mb-2">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/allproduct" element={<AllProduct />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/myitemalldata" element={<Item />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
