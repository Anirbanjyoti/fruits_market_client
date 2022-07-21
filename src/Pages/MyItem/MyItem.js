import React from "react";
import PagesHeader from "../PagesHeader/PagesHeader";
import { useAuthState } from "react-firebase-hooks/auth";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <PagesHeader></PagesHeader>

      <div className="inventory-manage">
        {/* Menu */}
        {user ? (
          <>
            <Nav.Link
              as={Link}
              to="/manage"
              style={{ fontSize: "30px", fontWeight: "600" }}
            >
              <i>Manage Items</i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add"
              style={{ fontSize: "30px", fontWeight: "600"}}
            >
              <i>Add Item</i>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/myitem"
              style={{ fontSize: "30px", fontWeight: "600"}}
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
    </div>
  );
};

export default MyItem;
