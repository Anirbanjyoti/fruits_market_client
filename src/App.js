import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";
import Inventory from "./Pages/Inventory/Inventory";
import AddItems from "./Pages/AddItems/AddItems";
import MyItem from "./Pages/MyItem/MyItem";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Register />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/manage" element={<Inventory/>}></Route>
        <Route path="/myitem" element={<MyItem/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/add" element={<AddItems/>}></Route>
        <Route
          path="/details/:productId"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
