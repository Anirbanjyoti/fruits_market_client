import React from "react";
import useAllFruits from "../../Hooks/useAllFruits/useALlFruits";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagesHeader from "../PagesHeader/PagesHeader";
import "./Inventory.css";

import auth from "../../firebase.init";
// import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [user] = useAuthState(auth);
  // const logout = () => {
  //   signOut(auth);
  // };
  const [products, setProducts] = useAllFruits();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/fruits/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => toast("Fruit Has been Deleted!", data));
      const remaining = products.filter((product) => product._id !== id);
      console.log(remaining);
      setProducts(remaining);
      console.log(products)
    }
  };
  return (
    <div>
      <PagesHeader></PagesHeader>
      {/* <h1 style={{textAlign:'center', margin:'50px auto'}}>Manage Your Inventories</h1> */}
      <div className="inventory-manage">
        {user ? (
          <>
            <Nav.Link
              as={Link}
              to="/manage"
              style={{ fontSize: "30px", fontWeight: "600", color: "#58A43A" }}
            >
              <i>Manage Items</i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add"
              style={{ fontSize: "30px", fontWeight: "600", color: "#58A43A" }}
            >
              <i>Add Item</i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/myitem"
              style={{ fontSize: "30px", fontWeight: "600", color: "#58A43A" }}
            >
              <i>My Item</i>
            </Nav.Link>
          </>
        ) : (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
      </div>
      <div className="inventory">
        {products.map((p) => (
        <div key={p._id} p={p} className="inventory-product">
          <img src={p.img} alt='images'></img><br></br>
          <p>{p.name}</p><button onClick={() => handleDelete(p._id)}  className="btn btn-danger">Delete</button>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Inventory;
