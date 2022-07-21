import React from "react";
import PagesHeader from "../PagesHeader/PagesHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const navigate =useNavigate()
  const { register, handleSubmit, acknowledged } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/fruits`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (acknowledged) {
          navigate("/manage");
        }
      });
  };


  return (
    <div>
      <PagesHeader></PagesHeader>

      <div className="inventory-manage">
        {/* add item */}
        {user ? (
          <>
            <Nav.Link
              as={Link}
              to="/manage"
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#58A43A",
              }}
            >
              <i>Manage Items</i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add"
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#58A43A",
              }}
            >
              <i>Add Item</i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/myitem"
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#58A43A",
              }}
            >
              <i>My Item</i>
            </Nav.Link>
          </>
        ) : (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
        {/* add item */}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 mx-auto d-flex flex-column mt-5 mb-5"
      >
        <h1>Please Add Item</h1>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          type="text"
          placeholder="Photo Url"
          {...register("img")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItems;
